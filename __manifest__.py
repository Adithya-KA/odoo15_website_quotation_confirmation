{
    'name': 'Website Quotation',
    'version': '15.0.0.1.0',
    'description': 'Website Quotation Confirmation',
    'depends': [
        'base', 'website_sale'
    ],
    'assets': {
        'web.assets_frontend': [
            'website_quotation/static/src/js/action_manager.js',
            'website_quotation/static/src/js/action_manager_two.js'],
    },
    'data': [
        'views/view.xml'

    ],

    'installable': True,
    'application': True

}