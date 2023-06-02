## Secrets
add new @ `/manage/credentials/store/system/domain/_/newCredentials`
```groovy
pipeline {
    agent any
    stages {
        stage('Release') {
            environment {
                MY_PPPPPPPPPP = credentials('DOCKER_HUB')
            }
            steps {
                echo '${MY_PPPPPPPPPP_USR}'
                // ${MY_PPPPPPPPPP_USR}

                echo 'single quotes: ${MY_PPPPPPPPPP_PSW}' 
                //    single quotes: ${MY_PPPPPPPPPP_PSW} 
                
                echo "double quotes: ${MY_PPPPPPPPPP_PSW}"
                //    double quotes: ****
                //    WRONG!
            }
        }
    }
}
```


```groovy
pipeline {
    agent any

    environment {
        MY_PASSWORD = credentials('my_credential_id')
    }
    stages {
        stage('double quotes') {
            steps {
                /* WRONG! */
                echo "My password is ${MY_PASSWORD}"
            }
        }

        stage('single quotes') {
            steps {
                /* CORRECT! */
                sh 'echo My password is ${MY_PASSWORD}'
            }
        }

        stage('OR !!!') {
            steps {
                echo "My password is"
                withCredentials([
                    usernamePassword(
                        credentials: 'my_2_credential_id', 
                        usernameVariable: USER, 
                        passwordVariable: PWD
                    )
                ]) {
                    sh "echo My username is ${USER}, password is ${PWD}"

                }
            }
        }
    }
}
```
