pipeline {
  agent any

  tools {
    nodejs 'Node18' // Or whatever NodeJS version you configured
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
