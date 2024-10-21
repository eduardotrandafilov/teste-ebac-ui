pipeline {
    agent any
    options {
        ansiColor('css')
    }

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/eduardotrandafilov/teste-ebac-ui.git'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}