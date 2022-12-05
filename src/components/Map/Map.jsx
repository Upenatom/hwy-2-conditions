import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent, Polyline } from 'react-leaflet'
import './Map.css'

export default function Map() {

  const wpgStarbuckOptions = { color: 'red' }
  const wpgStarbuck = [[49.76837616638687, -97.3286450793967],
  [49.76860822393492, -97.59564997628331],
  [49.76809062012019, -97.60229171253742],
  [49.768607736704574, -97.60845945216718],
  [49.76857086959301, -97.61802395805718],
  ]

  const starbuckFannystelleOptions = { color: 'blue' }
  const starbuckFannystelle = [[49.76857086959301, -97.61802395805718],
  [49.76819667494475, -97.6208137907088], [49.76775318125063, -97.62234449386598],
  [49.760674327615426, -97.6398322870955],
  [49.76042563638834, -97.64075618237257],
  [49.76007263126854, -97.64231299515815],
  [49.75605099625994, -97.67205596901476],
  [49.75595165664435, -97.673364719376],
  [49.75589620615171, -97.6746629085392],
  [49.7558570279578, -97.7269184589386],
  [49.755773852032775, -97.72932708263399],
  [49.75560403407624, -97.73110270500183],
  [49.755160425179966, -97.73397803306581],
  [49.74940007249988, -97.75514602661133],
  [49.744068883926644, -97.77388930320741],
  [49.74356277185767, -97.77498364448549],
  [49.74238413424645, -97.77687191963197],
  [49.74029718212672, -97.77988672256471]]


  const fannystelleElmCreekOptions = { color: 'yellow' }
  const fannystelleElmCreek = [
    [49.74006837460688, -97.78031587600708],
    [49.73956568763022, -97.78151750564577],
    [49.73924327186251, -97.78265476226808],
    [49.73906646230618, -97.78367936611177],
    [49.73898672445234, -97.784441113472],
    [49.73896245638385, -97.78512239456178],
    [49.73895205577936, -97.831449508667],
    [49.73886885086317, -97.83246874809267],
    [49.738619235258476, -97.83414244651796],
    [49.73843202271231, -97.8351080417633],
    [49.73816160331491, -97.8360950946808],
    [49.72958020524104, -97.86220371723176],
    [49.71393562050991, -97.90971636772157],
    [49.71114327251227, -97.9180955886841],
    [49.71010954272492, -97.92122840881349],
    [49.70954757300573, -97.92273581027986],
    [49.69536782776906, -97.95289993286134],
    [49.69092951876849, -97.96218037605287],
    [49.6904471448974, -97.96308159828187],
    [49.6901625767716, -97.9635375738144],
    [49.68991271070212, -97.96389698982239],
    [49.68934009611509, -97.9646158218384],
    [49.689086755387855, -97.96492159366609],
    [49.68819484670447, -97.96575307846071],
    [49.6856994977317, -97.96794712543489],
    [49.68382529883907, -97.96966910362245],
    [49.683478217041205, -97.96999633312225],
    [49.68296106056597, -97.97060787677766],
    [49.68245778220464, -97.97134280204774],
    [49.68185037034799, -97.97238886356354],
    [49.68125683486081, -97.97375142574312],
    [49.68093056080515, -97.97464191913606],
    [49.680663292128266, -97.97548949718477],
    [49.68042031932901, -97.97655165195467],
    [49.68018081638148, -97.97823607921602],
    [49.68012875036721, -97.97878324985506],
    [49.68011833715767, -98.00520300865175],
  ]

  const elmCreekHaywoodOptions = { color: 'purple' }
  const elmCreekHaywood = [
    [49.68011833715767, -98.00520300865175],
    [49.68007668429721, -98.1948244571686],
    [49.68000379170553, -98.19570958614351],
    [49.67982329529394, -98.19678246974945],
    [49.67968445144451, -98.19741010665895],
    [49.679503953847515, -98.19798409938814],
    [49.679316513326114, -98.19853127002716],
    [49.67903188004159, -98.19918572902681],
    [49.67872641807795, -98.1997436285019],
    [49.67836541510156, -98.20029616355897],
    [49.67791415761227, -98.20084869861604],
    [49.677487194747755, -98.20127785205842],
    [49.67710188357883, -98.20159435272218],
    [49.67535232419351, -98.20271015167238],
    [49.66867634377742, -98.20683538913728],
    [49.66834998531047, -98.20706069469453],
    [49.66777711674911, -98.20751667022706],
    [49.667034113535664, -98.20835351943971],
    [49.66667649579397, -98.20889532566072],
    [49.66643692515676, -98.20934057235719],
    [49.66604805436434, -98.21010768413544],
    [49.665662652565665, -98.21135759353639],
    [49.66549599138275, -98.2120978832245],
    [49.66533627388005, -98.21320295333864],
    [49.66529113622992, -98.21397542953493],

  ]

  const haywoodStClaudeOptions = { color: 'red' }
  const haywoodStClaude = [
    [49.66529113622992, -98.21397542953493],
    [49.66527377558411, -98.34651947021474],
  ]

  const stClaudeRathwellOptions = { color: 'blue' }
  const stClaudeRathwell = [
    [49.66527377558411, -98.34651947021474],
    [49.665245998537905, -98.37445735931398],
    [49.6651973886689, -98.37535321712495],
    [49.66497517150634, -98.37671577930452],
    [49.66475989766217, -98.37753117084503],
    [49.66460364992062, -98.37800323963167],
    [49.66437795785248, -98.37855577468873],
    [49.66411407041432, -98.37912440299988],
    [49.66336059445638, -98.38032066822052],
    [49.658672809102534, -98.38680624961853],
    [49.6566169859637, -98.3896976709366],
    [49.65623498223125, -98.39023411273958],
    [49.656134271656846, -98.39043259620668],
    [49.655957159451496, -98.39072227478029],
    [49.65541192763573, -98.3919668197632],
    [49.65501602299877, -98.39347422122957],
    [49.65491530990183, -98.39412331581116],
    [49.6547937593349, -98.39549124240877],
    [49.65080325929562, -98.46588850021364],
    [49.65066085942789, -98.46850097179414],
    [49.650612234987385, -98.4698474407196],
    [49.65060876181119, -98.47008883953094],
    [49.650577503214414, -98.55127394199373],
  ]

  const rathwellTreherneOptions = { color: 'yellow' }
  const rathwellTreherne = [
    [49.650577503214414, -98.55127394199373],
    [49.65056013731866, -98.60639333724977],
    [49.65051498596067, -98.6071014404297],
    [49.65040731716873, -98.60790073871613],
    [49.650282282143735, -98.6085444688797],
    [49.649889809006766, -98.60988020896913],
    [49.649657102201076, -98.61047029495239],
    [49.649063173818156, -98.6115485429764],
    [49.643297176625005, -98.61891388893127],
    [49.642942858141204, -98.61946642398836],
    [49.64257811583217, -98.62019062042238],
    [49.642352321604896, -98.62073242664339],
    [49.64207789336515, -98.62155318260194],
    [49.64189030861508, -98.62229883670808],
    [49.641727039818434, -98.62331807613374],
    [49.641664511198144, -98.62387061119081],
    [49.64012211314499, -98.65031719207764],
    [49.64003873888541, -98.65150809288026],
    [49.63987893782214, -98.65262925624849],
    [49.63975734970529, -98.65332663059236],
    [49.639479432869614, -98.65454435348512],
    [49.637676408873496, -98.66133570671083],
    [49.635970596394365, -98.66814315319063],
    [49.63580383351614, -98.66962373256683],
    [49.635769091177984, -98.67031574249269],
    [49.63572392610132, -98.68780374526979],
    [49.63571350338536, -98.69065761566164],
    [49.63574824576319, -98.69152665138246],
    [49.635703080667184, -98.69675159454347],
    [49.63570655490683, -98.70002925395966],
    [49.63559885336268, -98.70140254497528],
    [49.63548072881462, -98.70222330093385],
    [49.63513677629294, -98.703510761261],
    [49.63461563148002, -98.70480895042421],
    [49.630838902104564, -98.71047377586366],
  ]

  const treherneHollandOptions = { color: 'purple' }
  const treherneHolland = [
    [49.630838902104564, -98.71047377586366],
    [49.630081436302646, -98.71194362640382],
    [49.629685325642434, -98.71317744255067],
    [49.629539389324094, -98.71390700340272],
    [49.629428199454715, -98.71463656425477],
    [49.62423673989154, -98.76548051834106],
    [49.62409078725024, -98.76652657985689],
    [49.61980583987817, -98.78613889217378],
    [49.618175862346746, -98.79336476325989],
    [49.611328666134405, -98.82437109947206],
    [49.60728593575971, -98.84237945079803],
    [49.60459870764528, -98.854438662529],
    [49.60257536700008, -98.86374056339265],
    [49.601737498609594, -98.8698720932007],
    [49.60134811088875, -98.87312829494476],
    [49.60071882594517, -98.87776851654054],
    [49.60017645229534, -98.88116955757143],
    [49.59986354167621, -98.88238728046419],
    [49.599491523105236, -98.88354063034059],
    [49.59899781183403, -98.88481736183167],
    [49.597742650109446, -98.88740301132204],
    [49.59718981239811, -98.88864755630493],
    [49.59686297457699, -98.88959705829622],
    [49.59662653734093, -98.89040172100069],
    [49.59608411817397, -98.8926762342453],
  ]

  const hollandCypressRiverOptions = { color: 'red' }
  const hollandCypressRiver = [
    [49.59608411817397, -98.8926762342453],
    [49.5912959642568, -98.91420364379884],
    [49.59116382262534, -98.91478300094604],
    [49.59103168063595, -98.91544818878175],
    [49.5898528191517, -98.92058730125429],
    [49.58919208786698, -98.92324805259706],
    [49.587324604212185, -98.92984628677368],
    [49.58502231926879, -98.93791437149049],
    [49.58491102781777, -98.93823087215425],
    [49.58154781953315, -98.95022571086884],
    [49.57899482621074, -98.95931303501129],
    [49.576848678084055, -98.96804094314577],
    [49.575276399461174, -98.97414565086365],
    [49.572844833447405, -98.98160219192506],
    [49.57214560534408, -98.98380160331727],
    [49.56737945543809, -98.99997532367708],
    [49.56629048143212, -99.0038001537323],
    [49.56550069914514, -99.00695443153381],
    [49.56219878373858, -99.02441024780273],
    [49.56179516232469, -99.02686715126038],
    [49.56158291179436, -99.02920067310335],
    [49.56152375984282, -99.03094410896303],
    [49.561788203305554, -99.08584356307983],
    [49.56182299839138, -99.0940833091736],
    [49.56187171146992, -99.09799933433533],
  ]
  const cypressRiverGlenboroOptions = { color: 'blue' }
  const cypressRiverGlenboro = [
    [49.56187171146992, -99.09799933433533],
    [49.56196913748118, -99.14341986179353],
    [49.561993493953615, -99.1660737991333],
    [49.56202132990723, -99.18874382972717],
    [49.56205264533612, -99.21142995357515],
    [49.562063083807935, -99.23434674739839],
    [49.5620770017669, -99.25685584545137],
    [49.56206656329804, -99.27955269813539],
    [49.56204220686206, -99.28673028945924],
    [49.56205264533612, -99.29090380668642],
    [49.5620387273702, -99.3022656440735],
  ]

  const glenboroWawanessaOptions = { color: 'yellow' }
  const glenboroWawanessa = [
    [49.5620387273702, -99.3022656440735],
    [49.56204568635366, -99.34763789176942],
    [49.56200393243808, -99.37084436416627],
    [49.56201437092033, -99.39372360706331],
    [49.562024809400334, -99.41646337509157],
    [49.561993493953615, -99.46183562278749],
    [49.56198653496272, -99.48443591594697],
    [49.561955219491466, -99.50726151466371],
    [49.56192390400012, -99.53013002872468],
    [49.56190302699473, -99.5528268814087],
    [49.56186127295716, -99.57554519176483],
    [49.561829957405585, -99.58712160587311],
    [49.56187171146992, -99.59827925116434],
    [49.56208396074487, -99.62107837200166],
    [49.56215355047026, -99.63229537010193],
    [49.562174427368554, -99.63600218296052],
    [49.56220574269923, -99.63669955730438],
    [49.56226489382458, -99.63735401630402],
    [49.56240059319438, -99.63818550109863],
    [49.5625293332735, -99.63876485824586],
    [49.56276941521704, -99.63961243629456],
    [49.56300253713399, -99.64023470878602],
    [49.56335395762166, -99.64096426963808],
    [49.56371581369848, -99.64157581329347],
    [49.564296865441996, -99.64235901832582],
    [49.56488834813833, -99.64295446872711],
    [49.56549721989976, -99.64338362216951],
    [49.56621741840884, -99.64373230934144],
    [49.566520107364916, -99.64384496212007],
    [49.56684366934611, -99.6439039707184],
    [49.56714287529129, -99.64395225048065],
    [49.571950793740086, -99.64400053024293],
    [49.57243782129218, -99.64406490325929],
    [49.57291440783514, -99.64420437812807],
    [49.57335272419728, -99.64439749717714],
    [49.5738606096622, -99.64470326900482],
    [49.57423978098145, -99.64499294757843],
    [49.57463982092309, -99.64537918567657],
    [49.5749598505156, -99.6457439661026],
    [49.57533553475088, -99.64624285697937],
    [49.57563121012461, -99.64672565460206],
    [49.575839921074646, -99.64714407920839],
    [49.57618429219089, -99.64789509773256],
    [49.57639300077565, -99.64848518371583],
    [49.57665388525149, -99.64947760105134],
    [49.57682434139965, -99.65049142625806],
    [49.57693218524281, -99.6518324809646],
    [49.57683476433606, -99.6658766269684],
    [49.57681389370667, -99.67533409595491],
    [49.57682780746062, -99.67609584331512],
  ]

  const wawanessaNesbittOptions = { color: 'purple' }
  const wawanessaNesbitt = [
    [49.57682780746062, -99.67609584331512],
    [49.57663301454474, -99.70664620399475],
    [49.57659823001367, -99.70739722251894],
    [49.57665040680099, -99.71027791500092],
    [49.576758238651344, -99.71184968948364],
    [49.576959987924994, -99.7135502099991],
    [49.577290437519686, -99.71564233303071],
    [49.578466124250845, -99.72168266773225],
    [49.57961743498994, -99.72779810428621],
    [49.57978091195601, -99.72858130931856],
    [49.58045220524499, -99.73208427429199],
    [49.580594810402054, -99.73271727561952],
    [49.58110957676988, -99.73441243171693],
    [49.5815860786352, -99.73571598529817],
    [49.583123374097276, -99.7393959760666],
    [49.58880259996965, -99.7530645132065],
    [49.59016927149207, -99.75646555423738],
    [49.59042660484878, -99.75731849670412],
    [49.590725666233396, -99.75864350795747],
    [49.5909204028935, -99.75986123085023],
    [49.590986474083685, -99.7605586051941],
    [49.59104559033589, -99.76199626922609],
    [49.59110122909604, -99.77993488311768],
    [49.591153390376064, -99.80273902416229],
    [49.59122293866262, -99.82151985168458],
    [49.591215983838424, -99.82562363147737],
    [49.5912716224042, -99.8484116792679],
    [49.591313351286914, -99.86302971839906],

  ]

  const nesbittHwy10Options = { color: 'red' }
  const nesbittHwy10 = [
    [49.591313351286914, -99.86302971839906],
    [49.591313351286914, -99.87117826938629],
    [49.59137942194485, -99.91626083850862],
    [49.59140028634453, -99.92822349071504],
    [49.59138637674574, -99.92961823940279],
    [49.591320306097245, -99.93130266666414],
    [49.591181209702576, -99.93311047554016],
    [49.59087171880137, -99.93543326854707],
    [49.5902179562853, -99.93899524211885],
    [49.58674034883428, -99.95817303657533],
    [49.58663949451919, -99.9588865041733],
    [49.586573417441116, -99.95956242084505],
    [49.5865595064659, -99.96167600154878],


  ]



  function Onmapclick() {
    const map = useMapEvent('click', (e) => {
      console.log(`[${e.latlng.lat}, ${e.latlng.lng}],`)
    })
  }
  function routeClick(e) {
    return console.log(e.target.options.attribution)
  }


  return (
    <MapContainer className='map' center={[49.76999692, -97.616997532]} zoom={13} scrollWheelZoom={true}>
      <Onmapclick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      // attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // url='https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png'
      />
      <Polyline attribution={'Winnipeg - Starbuck'} pathOptions={wpgStarbuckOptions} positions={wpgStarbuck} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Starbuck - Fannystelle'} pathOptions={starbuckFannystelleOptions} positions={starbuckFannystelle} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Fannystelle - Elm Creek'} pathOptions={fannystelleElmCreekOptions} positions={fannystelleElmCreek} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Elm Creek - Haywood'} pathOptions={elmCreekHaywoodOptions} positions={elmCreekHaywood} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Haywood - St.Claude'} pathOptions={haywoodStClaudeOptions} positions={haywoodStClaude} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'StClaude - Rathwell'} pathOptions={stClaudeRathwellOptions} positions={stClaudeRathwell} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Rathwell - Treherne'} pathOptions={rathwellTreherneOptions} positions={rathwellTreherne} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Treherne - Holland'} pathOptions={treherneHollandOptions} positions={treherneHolland} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Holland - Cypress River'} pathOptions={hollandCypressRiverOptions} positions={hollandCypressRiver} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Cypress River - Glenboro'} pathOptions={cypressRiverGlenboroOptions} positions={cypressRiverGlenboro} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Glenboro - Wawanessa'} pathOptions={glenboroWawanessaOptions} positions={glenboroWawanessa} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Wawanessa - Nesbitt'} pathOptions={wawanessaNesbittOptions} positions={wawanessaNesbitt} eventHandlers={{ click: (e) => { routeClick(e) }, }} />
      <Polyline attribution={'Nesbitt - HWY 10'} pathOptions={nesbittHwy10Options} positions={nesbittHwy10} eventHandlers={{ click: (e) => { routeClick(e) }, }} />

      {/* <Marker position={[51.505, -0.09]}>
        <Popup >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}
