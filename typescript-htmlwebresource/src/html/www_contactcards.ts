import * as $ from 'jquery';

const onLoad = function() {
    $('#container').append('<h1>Contacts</h1>');
};


$(() => {
    onLoad();
});