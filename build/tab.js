const main__bar = $(".main__bar");
const contPath = ".main__content";

var dict = [
    {
        id:   0,
        title: "Curated goodies for Designers & Developers",
        buttonText: "latest collection",
        paragraph: "Synthetica is an experience design collective, bringing you the latest product, interaction and visual design goodies straight to your inbox."
    },
    {
        id:   1,
        title: "What is going on?",
        buttonText: "wake up",
        paragraph: "Where I am?"
    },
    {
        id:   2,
        title: "The Question",
        buttonText: "lay like a stone",
        paragraph: "Lay like a stone or Burn like a star"
    },
    {
        id:   3,
        title: "Tachikoma",
        buttonText: "reboot the universe",
        paragraph: "In analog, that's God. In digital, it's zero."
    }
];

for (var i = 0, l = Object.keys(dict).length; i < l; i++) {
    $(contPath+"_"+i).append(
        '<div class="row main_sticked_title"><div class="col d-flex justify-content-center"><h1 class="main__title lg-title">' + dict[i].title + '</h1></div></div>' +
        '<div class="row main_sticked_button main_sticked_button-lg"><div class="col"><button class="button button_primary ">' + dict[i].buttonText + '</button></div></div>' +
        '<div class="row  main_sticked_paragraph"><div class="col d-flex justify-content-center"><p class="main__paragraph lg-paragraph">' + dict[i].paragraph + '</p></div></div>' );
}
tabFunction('0');
function tabFunction(id) {
    id = parseInt(id);
    $(contPath).hide();
    $(contPath+"_"+id).show();
    $(".main__input").css("background", "none");
    $("#"+id).css("background-color", "white");
}

main__bar.click((e) => {
    const { target } = e;
      if (!target.dataset.id) {
        e.stopPropagation();
    } else {
        tabFunction(target.dataset.id);
    }
});
