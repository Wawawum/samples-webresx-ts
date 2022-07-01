var www;
(function (www) {
    let samples;
    (function (samples) {
        samples.contactForm = {
            onLoad: (executionContext) => {
                const formContext = executionContext.getFormContext();
                formContext.ui.setFormNotification('Hello World!', 'INFO', 'www_contact_form_notif');
            }
        };
    })(samples = www.samples || (www.samples = {}));
})(www || (www = {}));
