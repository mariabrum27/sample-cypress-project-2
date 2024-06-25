pipeline {
    agent any
    tools{
        nodejs "10.15.3"
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npx cypress run' 
            }
        }
    }
}