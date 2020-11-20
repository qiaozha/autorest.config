# configuration

See documentation [here](doc/00-onboarding-guide.md)

``` yaml

pipeline-model: v3

pipeline:
    configPlugin/generate:
        input:
            - openapi-document/multi-api/identity
        output-artifact: config-extension
    configPlugin/emitter:
        input:
            - configPlugin/generate
        scope: scope-config-plugin

scope-config-plugin:
    is-object: false
    output-artifact:
       - config-extension
    output-folder: $(config-output-folder)
```