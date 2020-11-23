pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/sitknewnormal/eShopOnWeb.git', branch: 'master'
            }
        }
        stage('Restore') {
            steps {
                sh "dotnet restore eShopOnWeb.sln"
            }
        }
        stage('Clean') {
            steps {
                sh "dotnet clean eShopOnWeb.sln"
            }
        }
        stage('Build') {
            steps {
                sh "dotnet build --configuration Release eShopOnWeb.sln"
            }
        }
        stage('Functional, integration and unit tests (xUnit)') {
            steps {
                sh "dotnet test eShopOnWeb.sln"
            }
        }
    }
}
