/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
	//define the width of the tooltip-boxes
	let box_w = "30%"
    //define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "images/01_8_November.jpg",
      "8. November 1895:<br>Der Physiker Wilhelm Conrad Röntgen entdeckt die Röntgenstrahlen. Am Jahrestag wird weltweit der «International Day of Radiology» gefeiert, dies auf Initiative der amerikanischen und europäischen Gesellschaft für Radiologie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[2] = [ "images/02_Was ist Radiologie.jpg",
      "Was ist Radiologie?<br>Das medizinische Fachgebiet setzt zahlreiche technische Verfahren ein, um medizinische Bilder zu diagnostischen, therapeutischen und wissenschaftlichen Zwecken zu gewinnen. Die meisten Verfahren werden als bildgebend oder bildgesteuert bezeichnet."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[3] = [ "images/03 Warum schmunzeln.jpg",
      "Warum schmunzeln Radiolog*innen wenn Dr. House ein einzelnes MRT-Bild betrachtet?<br>Pro Computer- oder Magnetresonanztomografie müssen 300–5‘000 Einzelbilder ausgewertet werden. Radiolog*innen ‘scrollen’ durch die Bildserien, betrachten sie aus verschiedenen Ebenen – urteilen aufgrund umfangreicher Bilddaten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[4] = [ "images/04 Röhre oder Ring.jpg",
      "Röhre oder Ring?<br>Unsere Patient*innen sprechen oft von der «Röhre» und meinen damit den Computer- und den Magnetresonanztomografen (CT und MRT/MRI). Das MRT-Gerät ist röhrenförmig. Die «Röhre» des CT-Geräts ist jedoch nur ein schmaler Ring. Ähnlich breit sind die Untersuchungsliegen beider Geräte: 80–100 cm bei der CT, 60–80 cm bei der MRT – mindestens so breit wie eine Luftmatratze."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[5] = [ "images/05 Was ist Nuklearmedizin.jpg",
      "Was ist Nuklearmedizin?<br>Nuklearmedizinische Untersuchungen machen Körperfunktionen sichtbar. Dazu werden geeignete radioaktive Substanzen eingesetzt, die bestimmte Stoffwechselprozesse hervorheben. Bei nuklearmedizinischen Therapien werden radioaktive Substanzen verabreicht, die sich gezielt in kranken Zellen (auf dem Bild z. B. Schilddrüsenmetastasen) anreichern und diese durch die Strahlung zerstören."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[6] = [ "images/06_Rund 70 Dozentinnen.jpg",
      "Rund 70 Dozent*innen unterrichten ca. 1200 Medizinstudierende in 6 Studienjahren. Wir sind jedoch nicht nur in die Ausbildung von Ärzt*innen, sondern auch von Radiologiefachpersonen, Physiker*innen, Biolog*innen, Chemiker*innen sowie anderen Fachleuten involviert, betreuen Studierende, Unterassistent*innen, Diplomand*innen und Doktorierende. Als Aus-, Weiter- und Fortbildungseinrichtung vermitteln wir ihnen medizinisches, technisches und naturwissenschaftliches Wissen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[7] = [ "images/07_Dank der Radiologie.jpg",
      "Dank der Radiologie wird Anatomie zum Greifen nah:<br>Das 3D Print Lab – ein interdisziplinäres Team aus Chirurg*innen und Radiolog*innen – stellt anhand medizinischer Bilddaten anatomisch präzise, mehrfarbige, sterilisierbare 3D-Modelle sowie Implantate her.Sie werden eingesetzt für Operationsplanung, Patient*innenaufklärung und Lehre. 2021 haben wir 1200 solch höchst individuelle Modelle angefertigt."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[8] = [ "images/08_400 Terabyte.jpg",
      "400 Terabyte:<br>Unser Bildarchivierungs- und Informationssystem ist so umfangreich wie 200‘000 Stunden Video in Fernsehqualität."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[9] = [ "images/09_Radiologische Bilder.jpg",
      "Radiologische Bilder zeigen manchmal Überraschendes. Die Darstellung des Absaugsystems eines speziellen Verbands in der Computertomografie führte bei den Radiolog*innen der muskuloskelettalen Diagnostik zu beispielloser Erheiterung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[10] = [ "images/10 Wozu braucht die.jpg",
      "Wozu braucht die Radiologie ein Labor für radioaktive Substanzen?<br>Die in der nuklearmedizinischen Diagnostik und Therapie eingesetzten Substanzen (Radiopharmazeutika) werden spezifisch für unsere Patient*innen hergestellt. Zu diesem Zweck gibt es am Unispital ein spezielles Labor der radiopharmazeutischen Chemie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[11] = [ "images/11_In einem Röntgenbild.jpg",
      "In einem Röntgenbild unserer muskuloskelettalen Diagnostik zeigten sich charmant geformte Edelstrahldrähte. Sie dienen der Fixierung von Knochenfragmenten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[12] = [ "images/12_Roya Afshari.jpg",
      "Roya Afshari, Doktorandin der radiologischen Physik, und ihre wissen-<br>schaftlichen Kollegen wurden am Kongress der International Society<br>for Magnetic Resonance in Medicine (ISMRM) mit einem Magna-Cum-<br>Laude-Preis für ihr Poster zur qMT-Bildgebung (quantitativer Magneti-<br>sierungstransfer) des gesamten Hirns in weniger als 5 Minuten geehrt.<br>Die Arbeit eröffnet sehr gute Aussichten für die klinische Anwendung<br>der qMT-Bildgebung in der neurologischen Diagnostik."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[13] = [ "images/13_Fast wie ein Abendstern.jpg",
      "Fast wie ein Abendstern sah der Blasenstein aus, den die Radiolog*innen der abdominellen Diagnostik in der Computertomografie entdeckten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[14] = [ "images/14_Der Preis für.jpg",
      "Der Preis für die beste Diplomarbeit der diplomierten Radiologie-<br>fachpersonen HF ging an unseren Absolventen Thomas Stocker.<br>Er erhielt ihn vom Bildungszentrum Gesundheit Basel-Stadt (BZG)<br>für seine Arbeit «Spätfolgen der pädiatrischen Radiotherapie»."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[15] = [ "images/15 Die Energiekrise.jpg",
      "Die Energiekrise wird auch für die Radiologie spürbar sein; die Geräte laufen nicht von allein. 26 Familien (à 4 Personen) brauchen so viel Strom wie 1 Magnetresonanztomograf."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[16] = [ "images/16_12 mm.jpg",
      "1,2 mm beträgt der winzige Durchmesser eines Gefässzugangs der interventionellen Radiologie. Sie ist spezialisiert auf die Diagnostik und Therapie von Gefässkrankheiten, Entzündungen, Tumoren und Schmerzen. Mithilfe kleinster Instrumente werden deren Ursachen gezielt und möglichst schonend behandelt. Die Behandlung wird daher als minimalinvasive Therapie bezeichnet. Auf den Angiografie-Bildern sieht man die hintere Gehirnarterie: vor (links) und nach (rechts) der Entfernung eines Gerinnsels."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[17] = [ "images/17-LungenbildgebungMRT.gif",
      "Eine unserer acht Abteilungen beschäftigt sich mit radiologischer Physik. Die forschungsorientierte Abteilung entwickelt neue Magnetresonanzverfahren zur Verbesserung der Bildgebung verschiedener Organe, etwa der Lungen. Zudem arbeiten die Strahlenphysiker, die für die Einhaltung und Optimierung des Strahlenschutzes am Unispital zuständig sind, in der radiologischen Physik."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[18] = [ "images/18 Haben Radiologinnen.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert; insofern könnte man beispielsweise auch vom CT-, MRI-, Ultraschall-, PET- und SPECT-Blick sprechen. Am Unispital setzen wir das gesamte Leistungsspektrum der modernen Radiologie und Nuklearmedizin ein, inklusive der minimalinvasiven und endovaskulären Therapie und der Radionuklidtherapie."
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

      if (window && window.screen && (window.screen.width <= 576)) {
        // text = text.replaceAll("<br>", "");
        text = text.split("<br>").join("");
        cssStyles.maxWidth = "400px";
      }

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
