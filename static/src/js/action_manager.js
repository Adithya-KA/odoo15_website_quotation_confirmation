odoo.define('website_quotation.check_button', function (require) {
"use strict";
var ajax = require('web.ajax');
var sale_order_list = []
        $(".check_box").change( function (ev) {
                 console.log("AAAABBBBBBBBBBBBBBBBAAAAa")
                var t = this.type
                console.log(t)
                if(t == "checkbox"){
                         console.log("AAAAAAAAa")
                         console.log(this.id)
                         sale_order_list.push(this.id)
                         console.log(sale_order_list)
                }
           $(document).on("click",'#list_confirm_btn_id', function(){
                ajax.jsonRpc('/checkbox/button_one/confirm', 'call', {'data': sale_order_list})
                alert("The order has been successfully confirmed");
                document.location.reload();
        });
    });
    });
