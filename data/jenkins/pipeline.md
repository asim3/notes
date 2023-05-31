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
        
        stage('Stage 111 Build') {
            steps {
                echo "My echo 111"
            }
        }

        
        stage('Stage 222 Test') {
            steps {
                sh '''
                echo My 222 Step
                echo My 2222 Step
                '''
            }
        }
        
        
        stage('Stage 333 Release') {
            steps {
                echo "My echo 333"
                sh '''
                echo My 3    Step
                echo My 3333 Step
                '''
            }
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
