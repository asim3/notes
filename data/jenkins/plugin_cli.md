```bash
jenkins-plugin-cli --version

jenkins-plugin-cli --list



jenkins-plugin-cli --credentials <CREDENTIALS,CREDENTIALS,...> 
jenkins-plugin-cli --jenkins-experimental-update-center URL    
jenkins-plugin-cli --jenkins-incrementals-repo-mirror URL      
jenkins-plugin-cli --jenkins-plugin-info URL                   
jenkins-plugin-cli --jenkins-update-center URL                 
jenkins-plugin-cli --latest VALUE                              
jenkins-plugin-cli --plugins (-p) STRING[]                     

jenkins-plugin-cli --available-updates                         
jenkins-plugin-cli --clean-download-directory                  
jenkins-plugin-cli --jenkins-version                           
jenkins-plugin-cli --latest-specified                          
jenkins-plugin-cli --no-download                               
jenkins-plugin-cli --output (-o) [STDOUT | YAML | TXT]         
jenkins-plugin-cli --plugin-download-directory (-d) FILE       
jenkins-plugin-cli --plugin-file (-f) FILE                     
jenkins-plugin-cli --skip-failed-plugins                       
jenkins-plugin-cli --view-all-security-warnings                
jenkins-plugin-cli --view-security-warnings                    
jenkins-plugin-cli --war (-w) VAL                              





#  --available-updates                         : Show available plugin updates for the requested plugins (default: false)



#  --clean-download-directory                  : If set, cleans the plugin download directory before plugin installation. Otherwise the tool performs
#                                                plugin download and reports compatibility issues, if any. (default: false)



#  --credentials <CREDENTIALS,CREDENTIALS,...> : Comma-separated list of credentials in format '<host>[:port]:<username>:<password>'. The password must
#                                                not contain space or ','



#  --jenkins-experimental-update-center URL    : Sets experimental update center; will override JENKINS_UC_EXPERIMENTAL environment variable. If not
#                                                set via CLI option or environment variable, will default to https://updates.jenkins.io/experimental/upd
#                                                ate-center.json



#  --jenkins-incrementals-repo-mirror URL      : Set Maven mirror to be used to download plugins from the Incrementals repository, will override the
#                                                JENKINS_INCREMENTALS_REPO_MIRROR environment variable. If not set via CLI option or environment
#                                                variable, will default to https://repo.jenkins-ci.org/incrementals



#  --jenkins-plugin-info URL                   : Sets the location of plugin information; will override JENKINS_PLUGIN_INFO environment variable. If
#                                                not set via CLI option or environment variable, will default to
#                                                https://updates.jenkins.io/plugin-versions.json



#  --jenkins-update-center URL                 : Sets main update center; will override JENKINS_UC environment variable. If not set via CLI option or
#                                                environment variable, will default to https://updates.jenkins.io/update-center.json



#  --jenkins-version                           : Jenkins version to be used. If undefined, Plugin Manager will use alternative ways to retrieve the
#                                                version, e.g. from WAR



#  --latest VALUE                              : Set to true to download the latest version of all dependencies, even if the version(s) of the
#                                                requested plugin(s) are not the latest. By default, plugin dependency versions will be determined by
#                                                the update center metadata or plugin MANIFEST.MF (default: true)



#  --latest-specified                          : Download latest transitive dependencies of any plugin that is requested to have the latest version. By
#                                                default, plugin dependency versions will be determined by the update center metadata or plugin
#                                                MANIFEST.MF (default: false)



#  --list (-l)                                 : Lists all plugins currently installed and if given a list of plugins to install either via file or CLI
#                                                option, all plugins that will be installed by the tool (default: false)



#  --no-download                               : Avoid downloading plugins; can be used in combination with other options to see information about
#                                                plugins and their dependencies (default: false)



#  --output (-o) [STDOUT | YAML | TXT]         : Output format for available updates (default: STDOUT)



#  --plugin-download-directory (-d) FILE       : Path to directory in which to install plugins; will override PLUGIN_DIR environment variable.



#  --plugin-file (-f) FILE                     : Path to plugins.txt or plugins.yaml file



#  --plugins (-p) STRING[]                     : List of plugins to install, separated by a space



#  --skip-failed-plugins                       : Skip installing plugins that have failed to download. By default, if a single plugin is unavailable
#                                                then all plugins fail to download and install. (default: false)



#  --view-all-security-warnings                : Set to true to show all plugins that have security warnings (default: false)



#  --view-security-warnings                    : Show if any security warnings exist for the requested plugins (default: false)



#  --war (-w) VAL                              : Path to Jenkins war file
```
