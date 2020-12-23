## Configuration
```py
import copy


class Configuration(object):

    @classmethod
    def set_default(cls, default):
        # will be called by load_kube_config()
        cls._default = copy.deepcopy(default)

    @classmethod
    def get_default_copy(cls):
        # will be called by ApiClient()__init__()
        """
        Return new instance of configuration.
        This method returns newly created, based on default constructor,
        object of Configuration class or returns a copy of default
        configuration passed by the set_default method.
        :return: The configuration object.
        """
        if cls._default is not None:
            return copy.deepcopy(cls._default)
        return Configuration()
```


## set Config
`kubernetes.config.kube_config` @ `python-base/config/kube_config.py`
```py
KUBE_CONFIG_DEFAULT_LOCATION = os.environ.get('KUBECONFIG', '~/.kube/config')


def load_kube_config(config_file=None, client_configuration=None, ...):

    if config_file is None:
        config_file = KUBE_CONFIG_DEFAULT_LOCATION
    # ...
    if client_configuration is None:
        # ...
        Configuration.set_default(config)
    else:
        # ...
```


## ApiClient get Config
```py
from kubernetes.client.configuration import Configuration


class ApiClient(object):
    def __init__(self, configuration=None, header_name=None, header_value=None,
                 cookie=None, pool_threads=1):
        if configuration is None:
            configuration = Configuration.get_default_copy()
        self.configuration = configuration
        # ...

    def call_api(self, resource_path, method, ...)
        if not async_req:
            return self.__call_api(...)

        return self.pool.apply_async(...)

    def __call_api(...):
        config = self.configuration

        # body
        if body:
            body = self.sanitize_for_serialization(body)

        # request url
        if _host is None:
            url = self.configuration.host + resource_path
        else:
            # use server/host defined in path or operation instead
            url = _host + resource_path

        # perform request and return response
        response_data = self.request(...)
```
