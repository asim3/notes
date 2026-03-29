## Display gcloud cheat sheet
```bash
gcloud cheat-sheet
```


## GLOBAL FLAGS

### `--account=ACCOUNT`
Google Cloud user account to use for invocation. Overrides the default
core/account property value for this command invocation.


### `--billing-project=BILLING_PROJECT`
The Google Cloud project that will be charged quota for operations
performed in gcloud. If you need to operate on one project, but need
quota against a different project, you can use this flag to specify the
billing project. If both billing/quota_project and --billing-project
are specified, --billing-project takes precedence. Run $ gcloud config
set --help to see more information about billing/quota_project.


### `--configuration=CONFIGURATION`
File name of the configuration to use for this command invocation. For
more information on how to use configurations, run: gcloud topic
configurations. You can also use the CLOUDSDK_ACTIVE_CONFIG_NAME
environment variable to set the equivalent of this flag for a terminal
session.


### `--flags-file=YAML_FILE`
A YAML or JSON file that specifies a --flag:value dictionary. Useful
for specifying complex flag values with special characters that work
with any command interpreter. Additionally, each --flags-file arg is
replaced by its constituent flags. See $ gcloud topic flags-file for
more information.


### `--flatten=[KEY,...]`
Flatten name[] output resource slices in KEY into separate records for
each item in each slice. Multiple keys and slices may be specified.
This also flattens keys for --format and --filter. For example,
--flatten=abc.def flattens abc.def[].ghi references to abc.def.ghi. A
resource record containing abc.def[] with N elements will expand to N
records in the flattened output. This allows us to specify what
resource-key the filter will operate on. This flag interacts with other
flags that are applied in this order: --flatten, --sort-by, --filter,
--limit.


### `--format=FORMAT`
Sets the format for printing command output resources. The default is a
command-specific human-friendly output format. If both core/format and
--format are specified, --format takes precedence. --format and
core/format both take precedence over core/default_format. The
supported formats are limited to: config, csv, default, diff, disable,
flattened, get, json, list, multi, none, object, table, text, value,
yaml. For more details run $ gcloud topic formats. Run $ gcloud config
set --help to see more information about core/format


### `--help`
Display detailed help.


### `--project=PROJECT_ID`
The Google Cloud project ID to use for this invocation. If omitted,
then the current project is assumed; the current project can be listed
using gcloud config list --format='text(core.project)' and can be set
using gcloud config set project PROJECTID.

--project and its fallback core/project property play two roles in the
invocation. It specifies the project of the resource to operate on. It
also specifies the project for API enablement check, quota, and
billing. To specify a different project for quota and billing, use
--billing-project or billing/quota_project property.


### `--quiet, -q`
Disable all interactive prompts when running gcloud commands. If input
is required, defaults will be used, or an error will be raised.

Overrides the default core/disable_prompts property value for this
command invocation. This is equivalent to setting the environment
variable CLOUDSDK_CORE_DISABLE_PROMPTS to 1.


### `--verbosity=VERBOSITY; default="warning"`
Override the default verbosity for this command. Overrides the default
core/verbosity property value for this command invocation. VERBOSITY
must be one of: debug, info, warning, error, critical, none.


### `--version, -v`
Print version information and exit. This flag is only available at the
global level.

### `-h`
Print a summary help and exit.
