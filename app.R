#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
data("iris")

server <- function(input, output, session) {

  data <- reactive({
    if (!is.null(input$irisData)) {
      iris <- as.data.frame(do.call(cbind, input$irisData))
      #.print(head(iris))
    }
    iris
  })

  observe({
    session$sendCustomMessage("irisData", data())
  })
}


ui <- function() {
  htmlTemplate("public/index.html")
}

addResourcePath("static", "dist")

shinyApp(ui = ui, server = server)
