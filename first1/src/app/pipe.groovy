def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
pipeline {
    agent any
    tools {
        maven 'MAVEN3'
        jdk 'OracleJDK8'
    }
    environment {
       registryCredential = 'ecr:ca-central-1:registryCredential'
        appRegistry = "379020110641.dkr.ecr.ca-central-1.amazonaws.com/vprofile"
        vprofileRegistry = "https://379020110641.dkr.ecr.ca-central-1.amazonaws.com"
         cluster = "vprofile" 
        service = "vprofileappsvc"
    }
    stages {
        stage('Fetch Code'){
            steps {
                git branch: 'docker', url: 'https://github.com/infratute/baseline-vprofile-project-complete.git' 
            }
        }
        stage('Build') {
            steps {
                sh 'mvn install -DskipTests'
            }
            post{
                success {
                    echo "Now Archiving"
                    archiveArtifacts artifacts: '**/*.war'
                }
            }
        }
        stage('UNIT TEST') {
            steps {
                sh 'mvn test' 
            }
        }
        stage('Checkstyle Analysis') {
            steps {
                sh 'mvn checkstyle:checkstyle' 
            }
        }
        stage('Sonar Analysis') {
            environment {
                scannerHome = tool 'sonar4.7'
            }
            steps {
                withSonarQubeEnv('sonar') {
                   sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=vprofile \
                   -Dsonar.projectName=vprofile \
                   -Dsonar.projectVersion=1.0 \
                   -Dsonar.sources=src/ \
                   -Dsonar.java.binaries=target/test-classes/com/visualpathit/account/controllerTest/ \
                   -Dsonar.junit.reportsPath=target/surefire-reports/ \
                   -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                   -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml'''
              }
               timeout(time: 3, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
            
        stage('Build App Image') {
            steps {
       
                script {
                dockerImage = docker.build( appRegistry + ":$BUILD_NUMBER", "./Docker-files/app/multistage/")
             }

     }
    
    }
        stage('Upload App Image') {
            steps{
                script {
                docker.withRegistry( vprofileRegistry, registryCredential ) {
                    dockerImage.push("$BUILD_NUMBER")
                    dockerImage.push('latest')
                }
                }
            }
        }
        stage('Deploy to ecs') {
          steps {
        withAWS(credentials: 'awscreds', region: 'us-central-1') {
          sh 'aws ecs update-service --cluster ${cluster} --service ${service} --force-new-deployment'
        }
      }
     }

    }
}