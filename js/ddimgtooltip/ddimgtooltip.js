/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
	//define the width of the tooltip-boxes
	let box_w = "405px"
    
	//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "images/01_8_November.jpg",
      "8. November 1895:<br>Der Physiker Wilhelm Conrad Röntgen entdeckt die<br>Röntgenstrahlen.<br>Am Jahrestag wird weltweit der «International Day of<br>Radiology» gefeiert, dies auf Initiative der amerika-<br>nischen und europäischen Gesellschaft für Radiologie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[2] = [ "images/02_Was ist Radiologie.jpg",
      "Was ist Radiologie?<br>Das medizinische Fachgebiet setzt zahlreiche tech-<br>nische Verfahren ein, um medizinische Bilder zu dia-<br>gnostischen, therapeutischen und wissenschaftlichen<br>Zwecken zu gewinnen.<br>Die meisten Verfahren werden als bildgebend oder<br>bildgesteuert bezeichnet."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[3] = [ "images/03 Warum schmunzeln.jpg",
      "Warum schmunzeln Radiolog*innen wenn Dr. House<br>ein einzelnes MRT-Bild betrachtet?<br>Pro Computer- oder Magnetresonanztomografie<br>müssen 300–5‘000 Einzelbilder ausgewertet werden.<br>Radiolog*innen ‘scrollen’ durch die Bildserien,<br>betrachten sie aus verschiedenen Ebenen – urteilen<br>aufgrund umfangreicher Bilddaten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[4] = [ "images/04 Röhre oder Ring.jpg",
      "Röhre oder Ring?<br>Unsere Patient*innen sprechen oft von der «Röhre» und meinen damit den Computer- und den Magnetresonanztomografen (CT und MRT/MRI). Das MRT-Gerät ist röhrenförmig. Die «Röhre» des CT-Geräts ist jedoch nur ein schmaler Ring. Ähnlich breit sind die Untersuchungsliegen beider Geräte: 80–100 cm bei der CT, 60–80 cm bei der MRT – mindestens so breit wie eine Luftmatratze."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[5] = [ "images/05 Was ist Nuklearmedizin.jpg",
      "Was ist Nuklearmedizin?<br>Nuklearmedizinische Untersuchungen machen<br>Körperfunktionen sichtbar. Dazu werden geeignete<br>radioaktive Substanzen eingesetzt, die bestimmte<br>Stoffwechselprozesse hervorheben.<br>Bei nuklearmedizinischen Therapien werden radio-<br>aktive Substanzen verabreicht, die sich gezielt<br>in kranken Zellen (auf dem Bild z. B. Schilddrüsen-<br>metastasen) anreichern und diese durch die Strah-<br>lung zerstören."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[6] = [ "images/06_Rund 70 Dozentinnen.jpg",
      "Rund 70 Dozent*innen unterrichten ca. 1200 Medizin-<br>studierende in 6 Studienjahren.<br>Wir sind jedoch nicht nur in die Ausbildung von<br>Ärzt*innen, sondern auch von Radiologiefachpersonen,<br>Physiker*innen, Biolog*innen, Chemiker*innen sowie<br>anderen Fachleuten involviert, betreuen Studierende,<br>Unterassistent*innen, Diplomand*innen und Dokto-<br>rierende.<br>Als Aus-, Weiter- und Fortbildungseinrichtung ver-<br>mitteln wir ihnen medizinisches, technisches und natur-<br>wissenschaftliches Wissen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[7] = [ "images/07_Dank der Radiologie.jpg",
      "Dank der Radiologie wird Anatomie zum Greifen nah:<br>Das 3D Print Lab – ein interdisziplinäres Team<br>aus Chirurg*innen und Radiolog*innen –<br>stellt anhand medizinischer Bilddaten anatomisch<br>präzise, mehrfarbige, sterilisierbare 3D-Modelle<br>sowie Implantate her.<br>Sie werden eingesetzt für Operationsplanung,<br>Patient*innenaufklärung und Lehre.<br>2021 haben wir 1200 solch höchst individuelle Modelle<br>angefertigt."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[8] = [ "images/08_400 Terabyte.jpg",
      "400 Terabyte:<br>Unser Bildarchivierungs- und Informationssystem<br>ist so umfangreich wie 200‘000 Stunden Video<br>in Fernsehqualität."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[9] = [ "images/09_Radiologische Bilder.jpg",
      "Radiologische Bilder zeigen manchmal Überraschen-<br>des. Die Darstellung des Absaugsystems eines<br>speziellen Verbands in der Computertomografie<br>führte bei den Radiolog*innen der muskuloskelettalen<br>Diagnostik zu beispielloser Erheiterung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[10] = [ "images/10 Wozu braucht die.jpg",
      "Wozu braucht die Radiologie ein Labor für radioaktive Substanzen?<br>Die in der nuklearmedizinischen Diagnostik und Thera-<br>pie eingesetzten Substanzen (Radiopharmazeutika)<br>werden spezifisch für unsere Patient*innen hergestellt.<br>Zu diesem Zweck gibt es am Unispital ein spezielles<br>Labor der radiopharmazeutischen Chemie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[11] = [ "images/11_In einem Röntgenbild.jpg",
      "In einem Röntgenbild unserer muskuloskelettalen Dia-<br>gnostik zeigten sich charmant geformte Edelstahl-<br>drähte.<br>Sie dienen der Fixierung von Knochenfragmenten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[12] = [ "images/13_Fast wie ein Abendstern.jpg",
      "Fast wie ein Abendstern sah der Blasenstein aus,<br>den die Radiolog*innen der abdominellen Diagnostik<br>in der Computertomografie entdeckten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[13] = [ "images/15 Die Energiekrise.jpg",
      "Die Energiekrise wird auch für die Radiologie spürbar<br>sein; die Geräte laufen nicht von allein.<br>26 Familien (à 4 Personen) brauchen so viel Strom<br>wie 1 Magnetresonanztomograf."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[14] = [ "images/16_12 mm.jpg",
      "1,2 mm beträgt der winzige Durchmesser eines<br>Gefässzugangs der interventionellen Radiologie.<br>Sie ist spezialisiert auf die Diagnostik und Therapie<br>von Gefässkrankheiten, Entzündungen, Tumoren und<br>Schmerzen.<br>Mithilfe kleinster Instrumente werden deren Ursachen<br>gezielt und möglichst schonend behandelt. Die Be-<br>handlung wird daher als minimalinvasive Therapie<br>bezeichnet. Auf diesen Angiografie-Bildern sieht man<br>die hintere Gehirnarterie: vor (links) und nach (rechts)<br>der Entfernung eines Gerinnsels."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[15] = [ "images/17-LungenbildgebungMRT.gif",
      "Eine unserer acht Abteilungen beschäftigt sich<br>mit radiologischer Physik. Die forschungsorientierte<br>Abteilung entwickelt neue Magnetresonanzverfahren<br>zur Verbesserung der Bildgebung verschiedener<br>Organe, etwa der Lungen.<br>Zudem arbeiten die Strahlenphysiker, welche für die<br>Einhaltung und Optimierung des Strahlenschutzes<br>am Unispital zuständig sind, in der radiologischen<br>Physik."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[16] = [ "images/18 Haben Radiologinnen.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	 

    return tooltips; //do not remove/change this line
  })(),

  tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

  //***** NO NEED TO EDIT BEYOND HERE

  tipprefix: "imgtip", //tooltip ID prefixes

  createtip: function ($, tipid, tipinfo) {
    if ($("#" + tipid).length == 0) {
      //if this tooltip doesn't exist yet
      var text = tipinfo[1] || "";
      var cssStyles = tipinfo[2] || {};

//MiB: auskommentiert um <br> auch auf dem Smartphone korrekt darzustellen
      // if (window && window.screen && (window.screen.width <= 576)) {
        // // text = text.replaceAll("<br>", "");
        // text = text.split("<br>").join("");
        // cssStyles.maxWidth = "400px";
      // }

      return $('<div id="' + tipid + '" class="ddimgtooltip" />')
        .html(
          '<div style="text-align:center; margin-top:20px"><img src="' +
            tipinfo[0] +
            '" style="width:100%"/></div>' +
            '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:30px">' +
                text +
                "</div>"
        )
        .css(cssStyles)
        .appendTo(document.body);
    }
    return null;
  },

  positiontooltip: function ($, $tooltip, e) {
    var x = e.pageX + this.tooltipoffsets[0],
      y = e.pageY + this.tooltipoffsets[1];
    var tipw = $tooltip.outerWidth(),
      tiph = $tooltip.outerHeight(),
      x = x + tipw > $(document).scrollLeft() + $(window).width() ? x - tipw - ddimgtooltip.tooltipoffsets[0] * 2 : x;
    y =
      y + tiph > $(document).scrollTop() + $(window).height()
        ? $(document).scrollTop() + $(window).height() - tiph - 10
        : y;
    $tooltip.css({ left: x, top: y });
  },

  showbox: function ($, $tooltip, e) {
    $tooltip.show();
    this.positiontooltip($, $tooltip, e);
  },

  hidebox: function ($, $tooltip) {
    $tooltip.hide();
  },

  init: function (targetselector) {
    jQuery(document).ready(function ($) {
      var tiparray = ddimgtooltip.tiparray;
      var $targets = $(targetselector);
      if ($targets.length == 0) return;
      var tipids = [];
      $targets.each(function () {
        var $target = $(this);
        $target.attr("rel").match(/\[(\d+)\]/); //match d of attribute rel="imgtip[d]"
        var tipsuffix = parseInt(RegExp.$1); //get d as integer
        var tipid = (this._tipid = ddimgtooltip.tipprefix + tipsuffix); //construct this tip's ID value and remember it
        var $tooltip = ddimgtooltip.createtip($, tipid, tiparray[tipsuffix]);
        $target.mousedown(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseup(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseenter(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseleave(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.hidebox($, $tooltip, e);
        });
        $target.mousemove(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.positiontooltip($, $tooltip, e);
        });
        if ($tooltip) {
          $tooltip.mouseenter(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mousedown(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mouseup(function () {
            ddimgtooltip.hidebox($, $(this));
          });
        }
      });
    }); //end dom ready
  }
};

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]");
