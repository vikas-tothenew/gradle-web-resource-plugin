package com.github.ksoichiro.web.resource

class WebResourceCompileLessTask extends WebResourceCompileBaseTask {
    static String NAME = "webResourceCompileLess"

    WebResourceCompileLessTask() {
        dependsOn([WebResourceInstallBowerDependenciesTask.NAME])
        gulpCommand = 'less'
        project.afterEvaluate {
            extension = project.extensions.webResource
            getInputs()
                    .files(retrieveValidPaths(getSrcLess()))
                    .property('version', WebResourceExtension.VERSION)
            getOutputs().files(retrieveValidPaths(getDestLess()), getGulpfile())
        }
    }
}