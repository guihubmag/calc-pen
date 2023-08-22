function addProduct(placementId) {
    var productSection = document.getElementById('product-section');

    var iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-popups allow-scripts allow-modals allow-forms allow-same-origin');
    iframe.setAttribute('style', 'width:120px;height:240px;');
    iframe.setAttribute('marginwidth', '0');
    iframe.setAttribute('marginheight', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('src', '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=your-amazon-affiliate-id&language=en_US&marketplace=amazon&region=BR&placement=' + placementId + '&asins=' + placementId + '&linkId=99b09be7009659c89ef62dcc64301dc2&show_border=true&link_opens_in_new_window=true');
    
    productSection.appendChild(iframe);
}

window.onload = function() {
    addProduct('B07D99JGM7');
    addProduct('B0B12DV64Y');
    addProduct('B00W3KVGF8');
    addProduct('B01N8U3BA0');
    addProduct('B07GT6FMDK');
    addProduct('B074XJ8PY5');
    addProduct('B08K9FRH7N');
    addProduct('B08M8YD8WD');
    addProduct('B088GJR4B9');
    
    // Adicione mais chamadas para addProduct aqui, uma para cada produto que você quer adicionar...
}
