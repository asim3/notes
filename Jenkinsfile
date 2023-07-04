pipeline {
    agent any

    environment {
        DOCKER_HUB = credentials('DOCKER_HUB')
        PROJECT_NAME = "notes"
        IMAGE_NAME = 'notes'
        IMAGE_VERSION = "v0.${BUILD_ID}"
    }

    options {
        timeout(time: 1, unit: 'HOURS')
        // timeout on whole pipeline job
    }

    stages {
        stage('Clone') { 
            steps {
                git url: "https://github.com/asim3/${PROJECT_NAME}.git", branch: 'main'
                sh 'ls -n .'
            }
        }


        stage('Build') {
            steps {
                sh 'docker build -t ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION} .'
            }
        }


        stage('Tests') {
            options {
                timeout(time: 15, unit: 'SECONDS')
            }
            steps {
                sh 'docker container run --rm ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION}'
            }
        }


        stage('Release') {
            steps {
                sh 'echo ${DOCKER_HUB_PSW} | docker login -u ${DOCKER_HUB_USR} --password-stdin'
                sh 'docker push     ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION}'
                sh 'docker image rm ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION}'
                sh 'docker pull     ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION}'
            }
        }


        stage('Deploy') {
            steps {
              sh '''
cat <<EOF | docker stack deploy -c - ${PROJECT_NAME}
version: "3.8"
services:
    ${PROJECT_NAME}:
        image: ${DOCKER_HUB_USR}/${IMAGE_NAME}:${IMAGE_VERSION}
        deploy:
            mode: replicated
            replicas: 3
            labels:
                - traefik.enable=true
                - traefik.http.routers.${PROJECT_NAME}-app.rule=Host(\\`${PROJECT_NAME}.local.host\\`)
                - traefik.http.routers.${PROJECT_NAME}-app.tls=true
                - traefik.http.services.${PROJECT_NAME}-svc.loadbalancer.server.port=80
            resources:
                reservations:
                    memory: 128M
                limits:
                    memory: 2048M
        networks:
            - main-public
networks:
    main-public:
        external: true
EOF
              '''
            }
        }


        stage('Done') { steps { echo "Done." } }
    }


    post {
        always {
            sh 'docker logout'
        }

        failure {
            mail cc: 'cc@mail.com', from: 'me@mail.com', to: 'to@mail.com', subject: 'My Email Subject', body: """
            My Body 
            Line one
            Line 222
            Report @ ${RUN_DISPLAY_URL}
            """
        }

        success {
            echo "OK from success."
        }
    }
}
