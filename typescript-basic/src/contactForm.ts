function onContactFormLoad(executionContext: Xrm.Events.EventContext) {

    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification('Hello world!', 'INFO', 'www_contactform_notification');
}