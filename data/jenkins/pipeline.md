# Pipeline
[docs](https://www.jenkins.io/doc/book/pipeline/syntax/)


- Dashboard 
  - New Item 
    - Name: my-first_pipeline
    - Pipeline
      - Pipeline script
      - `OR`
      - Pipeline script from SCM



## Declarative Pipeline
```groovy
pipeline {
    agent any
    
    stages {
        
        stage('Clone') { steps { echo "My Clone" } }
        
        stage('Build') { steps { echo "My Build ${BUILD_ID}" } }
        
        stage('Tests') { steps { sh 'echo Tests' } }
        
        stage('Release') {
            steps {
                echo "My Release"
                sh """
                echo My Release 3
                echo My Release $BUILD_ID
                """
            }
        }
    }

    post {
        always {
            echo "Done from always. @ $RUN_DISPLAY_URL"
        }

        failure {
            echo "Error from failure"
        }

        success {
            echo "OK from success."
        }
    }
}
```



## sleap
```groovy
pipeline {
    agent any

    stages {

        stage('Stage 111') {
            steps {
                sh "date"
            }
        }

        stage('Stage 222') {
            options {
                timeout(time: 55, unit: "SECONDS")
            }
            steps {
                sh "date"
            }
        }

        stage('Stage 333') {
            options {
                timeout(time: 120, unit: "SECONDS")
            }
            steps {
                sh "date"
            }
        }

    }
}
```


## IF
```groovy
pipeline {
    agent any
    stages {
        stage('Release') {
            when {
                expression {
                    BRANCH_NAME == "testing" || BRANCH_NAME == "main" && $BUILD_ID == 12
                }
            }
            steps {
                echo "My Release"
            }
        }
    }
}
```
