# Pipeline

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
        
        stage('Stage 111') {
            steps {
                echo "My echo 111"
            }
        }

        
        stage('Stage 222') {
            steps {
                sh '''
                echo My 222 Step
                echo My 2222 Step
                '''
            }
        }
        
        
        stage('Stage 333') {
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
