$( document ).ready(function() {
    //hljs.configure({useBR: true, tabReplace: '    '});
    $('pre code').each(function(i, block) {
        //block.innerHTML = block.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, '<br>').trim();
        console.log(block.innerHTML);
        //hljs.highlightBlock(block);
    });
    // $('code.hljs').each(function(i, block) {
    //     hljs.lineNumbersBlock(block);
    // });

    function addSourceLineNumbers()
    {
    var
        prefix = 'prefix',
        l = 0,
        result = this.innerHTML.replace(/\n/g, function() {
            l++;
            return "\n" + '<a class="line" name="' + prefix + l + '">' + l + '</a>';
        })
    ;
    
        this.innerHTML = '<a class="line" name="' + prefix + '0">0</a>' + result;
    }
    
    $('pre code').each(addSourceLineNumbers);
});