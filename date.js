Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()+1));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };

  window.onload = function ()
{
    var numWeek=(new Date().getWeekNumber()-26)%12+1   
    
    var prog_indexsporty=document.getElementById("prog_indexsporty")
    var prog_indexmix=document.getElementById("prog_indexmix")
    var prog_indexyoga=document.getElementById("prog_indexyoga")

    var prog_indexsporty_swiper=document.getElementById("prog_indexsporty_swiper")
    var prog_indexmix_swiper=document.getElementById("prog_indexmix_swiper")
    var prog_indexyoga_swiper=document.getElementById("prog_indexyoga_swiper")

    var prog_indexsporty_week=document.getElementById("prog_indexsporty_week")
    var prog_indexmix_week=document.getElementById("prog_indexmix_week")
    var prog_indexyoga_week=document.getElementById("prog_indexyoga_week")

    var numWeekOnPage=document.getElementById("numweek")

    if (prog_indexsporty !== null){
    prog_indexsporty.href = "prog_indexsporty/indexsport_sporty_" + String(numWeek) + ".html"
    prog_indexmix.href = "prog_indexmix/indexsport_mix_" + String(numWeek) + ".html"
    prog_indexyoga.href = "prog_indexyoga/indexsport_yoga_" + String(numWeek) + ".html"
    }
    
    if (prog_indexsporty_swiper !== null){
    prog_indexsporty_swiper.href = "prog_indexsporty/indexsport_sporty_" + String(numWeek) + ".html"
    prog_indexmix_swiper.href = "prog_indexmix/indexsport_mix_" + String(numWeek) + ".html"
    prog_indexyoga_swiper.href = "prog_indexyoga/indexsport_yoga_" + String(numWeek) + ".html"
    }

    if (prog_indexsporty_week !== null){
    prog_indexsporty_week.href = "../prog_indexsporty/indexsport_sporty_" + String(numWeek) + ".html"
    prog_indexmix_week.href = "../prog_indexmix/indexsport_mix_" + String(numWeek) + ".html"
    prog_indexyoga_week.href = "../prog_indexyoga/indexsport_yoga_" + String(numWeek) + ".html"
    }

    if(numWeekOnPage !== null){
      numWeekOnPage.innerHTML = "Week "+ String(numWeek)
    }
    
};