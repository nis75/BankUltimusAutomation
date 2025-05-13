pipeline {
  agent any

  tools {
    nodejs 'Node24' // Or whatever NodeJS version you configured
  }

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        bat 'npx cypress run'
      }
    }
  }
}
