function onContactFormLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification('Hello world!', 'INFO', 'www_contactform_notification');
}
