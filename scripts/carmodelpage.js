
addEventListener('load', (event) => {
    let headings = jQuery('.mag-box-title h3');
    let titles = [];

    headings.each(function(i) {
        let heading = jQuery(this);
        let headingId = 'car-mode-heading-' + i;
        heading.attr('id', headingId);
        titles.push([ heading.text().replace(/[\n\t]+/g, ''),  headingId]);
    });

    let toc = jQuery('#model-page-toc ul');
    titles.forEach((title) => {
        toc.append(jQuery('<li></li>').text(title[0]));
    });
});
