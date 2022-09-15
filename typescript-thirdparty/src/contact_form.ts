import * as _ from 'lodash';

export const onContactFormLoad = function(executionContext: Xrm.Events.EventContext) {

    const technologies = ['Canvas App', 'Dataverse', 'Model-Driven App', 'Power Automate', 'Power BI'];
    const suffledTech = _.shuffle(technologies).join(', ');

    const formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification(`Here are some things you may interest you in no particular order: ${suffledTech}.`, 'INFO', 'www_contactform_notification');
};