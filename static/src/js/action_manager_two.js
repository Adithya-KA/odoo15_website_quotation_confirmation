odoo.define('website_quotation.confirm_button', function (require) {
        "use strict";
var ajax = require('web.ajax');
console.log("mmm")
        $(document).on('click','.form_button_confirm', function(){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        console.log(this.id)
        var id = this.id
        ajax.jsonRpc('/quotation/button_two/confirm', 'call', {'data': id})
        alert("The order has been successfully confirmed.")
        document.location.reload();
        return id
        });
    })
