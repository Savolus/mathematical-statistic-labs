export default point => {
    let laplaceIntegralFunctionValue = 0
    
    switch (point.toFixed(2)) {
        case '0.00': laplaceIntegralFunctionValue = 0; break
        case '0.01': laplaceIntegralFunctionValue = 0.0039893563146316; break
        case '0.02': laplaceIntegralFunctionValue = 0.00797831371690194; break
        case '0.03': laplaceIntegralFunctionValue = 0.0119664734141126; break
        case '0.04': laplaceIntegralFunctionValue = 0.0159534368528308; break
        case '0.05': laplaceIntegralFunctionValue = 0.0199388058383725; break
        case '0.06': laplaceIntegralFunctionValue = 0.0239221826541068; break
        case '0.07': laplaceIntegralFunctionValue = 0.0279031701805211; break
        case '0.08': laplaceIntegralFunctionValue = 0.0318813720139873; break
        case '0.09': laplaceIntegralFunctionValue = 0.0358563925851722; break
        case '0.10': laplaceIntegralFunctionValue = 0.039827837277029; break
        case '0.11': laplaceIntegralFunctionValue = 0.0437953125423167; break
        case '0.12': laplaceIntegralFunctionValue = 0.0477584260205839; break
        case '0.13': laplaceIntegralFunctionValue = 0.0517167866545611; break
        case '0.14': laplaceIntegralFunctionValue = 0.0556700048059065; break
        case '0.15': laplaceIntegralFunctionValue = 0.0596176923702425; break
        case '0.16': laplaceIntegralFunctionValue = 0.0635594628914329; break
        case '0.17': laplaceIntegralFunctionValue = 0.0674949316750384; break
        case '0.18': laplaceIntegralFunctionValue = 0.0714237159009007; break
        case '0.19': laplaceIntegralFunctionValue = 0.0753454347347955; break
        case '0.20': laplaceIntegralFunctionValue = 0.079259709439103; break
        case '0.21': laplaceIntegralFunctionValue = 0.0831661634824423; break
        case '0.22': laplaceIntegralFunctionValue = 0.0870644226482147; break
        case '0.23': laplaceIntegralFunctionValue = 0.0909541151420059; break
        case '0.24': laplaceIntegralFunctionValue = 0.0948348716977958; break
        case '0.25': laplaceIntegralFunctionValue = 0.0987063256829237; break
        case '0.26': laplaceIntegralFunctionValue = 0.102568113201761; break
        case '0.27': laplaceIntegralFunctionValue = 0.106419873198039; break
        case '0.28': laplaceIntegralFunctionValue = 0.110261247555797; break
        case '0.29': laplaceIntegralFunctionValue = 0.114091881198877; break
        case '0.30': laplaceIntegralFunctionValue = 0.117911422188953; break
        case '0.31': laplaceIntegralFunctionValue = 0.121719521822019; break
        case '0.32': laplaceIntegralFunctionValue = 0.12551583472332; break
        case '0.33': laplaceIntegralFunctionValue = 0.129300018940653; break
        case '0.34': laplaceIntegralFunctionValue = 0.133071736036028; break
        case '0.35': laplaceIntegralFunctionValue = 0.136830651175619; break
        case '0.36': laplaceIntegralFunctionValue = 0.140576433217991; break
        case '0.37': laplaceIntegralFunctionValue = 0.144308754800547; break
        case '0.38': laplaceIntegralFunctionValue = 0.148027292424163; break
        case '0.39': laplaceIntegralFunctionValue = 0.151731726535982; break
        case '0.40': laplaceIntegralFunctionValue = 0.155421741610324; break
        case '0.41': laplaceIntegralFunctionValue = 0.159097026227677; break
        case '0.42': laplaceIntegralFunctionValue = 0.162757273151751; break
        case '0.43': laplaceIntegralFunctionValue = 0.166402179404542; break
        case '0.44': laplaceIntegralFunctionValue = 0.170031446339406; break
        case '0.45': laplaceIntegralFunctionValue = 0.17364477971208; break
        case '0.46': laplaceIntegralFunctionValue = 0.177241889749652; break
        case '0.47': laplaceIntegralFunctionValue = 0.180822491217444; break
        case '0.48': laplaceIntegralFunctionValue = 0.184386303483777; break
        case '0.49': laplaceIntegralFunctionValue = 0.187933050582609; break
        case '0.50': laplaceIntegralFunctionValue = 0.191462461274013; break
        case '0.51': laplaceIntegralFunctionValue = 0.194974269102481; break
        case '0.52': laplaceIntegralFunctionValue = 0.198468212453034; break
        case '0.53': laplaceIntegralFunctionValue = 0.201944034605124; break
        case '0.54': laplaceIntegralFunctionValue = 0.205401483784302; break
        case '0.55': laplaceIntegralFunctionValue = 0.208840313211654; break
        case '0.56': laplaceIntegralFunctionValue = 0.212260281150973; break
        case '0.57': laplaceIntegralFunctionValue = 0.215661150953676; break
        case '0.58': laplaceIntegralFunctionValue = 0.219042691101436; break
        case '0.59': laplaceIntegralFunctionValue = 0.222404675246535; break
        case '0.60': laplaceIntegralFunctionValue = 0.225746882249926; break
        case '0.61': laplaceIntegralFunctionValue = 0.229069096216994; break
        case '0.62': laplaceIntegralFunctionValue = 0.232371106531017; break
        case '0.63': laplaceIntegralFunctionValue = 0.235652707884322; break
        case '0.64': laplaceIntegralFunctionValue = 0.238913700307138; break
        case '0.65': laplaceIntegralFunctionValue = 0.242153889194135; break
        case '0.66': laplaceIntegralFunctionValue = 0.245373085328664; break
        case '0.67': laplaceIntegralFunctionValue = 0.24857110490469; break
        case '0.68': laplaceIntegralFunctionValue = 0.25174776954643; break
        case '0.69': laplaceIntegralFunctionValue = 0.25490290632569; break
        case '0.70': laplaceIntegralFunctionValue = 0.258036347776927; break
        case '0.71': laplaceIntegralFunctionValue = 0.261147931910013; break
        case '0.72': laplaceIntegralFunctionValue = 0.264237502220749; break
        case '0.73': laplaceIntegralFunctionValue = 0.267304907699103; break
        case '0.74': laplaceIntegralFunctionValue = 0.27035000283521; break
        case '0.75': laplaceIntegralFunctionValue = 0.273372647623132; break
        case '0.76': laplaceIntegralFunctionValue = 0.276372707562401; break
        case '0.77': laplaceIntegralFunctionValue = 0.27935005365735; break
        case '0.78': laplaceIntegralFunctionValue = 0.282304562414267; break
        case '0.79': laplaceIntegralFunctionValue = 0.285236115836363; break
        case '0.80': laplaceIntegralFunctionValue = 0.288144601416603; break
        case '0.81': laplaceIntegralFunctionValue = 0.291029912128398; break
        case '0.82': laplaceIntegralFunctionValue = 0.293891946414187; break
        case '0.83': laplaceIntegralFunctionValue = 0.296730608171932; break
        case '0.84': laplaceIntegralFunctionValue = 0.29954580673955; break
        case '0.85': laplaceIntegralFunctionValue = 0.302337456877308; break
        case '0.86': laplaceIntegralFunctionValue = 0.305105478748192; break
        case '0.87': laplaceIntegralFunctionValue = 0.307849797896304; break
        case '0.88': laplaceIntegralFunctionValue = 0.310570345223288; break
        case '0.89': laplaceIntegralFunctionValue = 0.313267056962827; break
        case '0.90': laplaceIntegralFunctionValue = 0.315939874653241; break
        case '0.91': laplaceIntegralFunctionValue = 0.318588745108203; break
        case '0.92': laplaceIntegralFunctionValue = 0.321213620385628; break
        case '0.93': laplaceIntegralFunctionValue = 0.323814457754742; break
        case '0.94': laplaceIntegralFunctionValue = 0.326391219661375; break
        case '0.95': laplaceIntegralFunctionValue = 0.328943873691518; break
        case '0.96': laplaceIntegralFunctionValue = 0.331472392533162; break
        case '0.97': laplaceIntegralFunctionValue = 0.33397675393647; break
        case '0.98': laplaceIntegralFunctionValue = 0.336456940672308; break
        case '0.99': laplaceIntegralFunctionValue = 0.338912940489169; break
        case '1.00': laplaceIntegralFunctionValue = 0.341344746068543; break
        case '1.01': laplaceIntegralFunctionValue = 0.343752354978746; break
        case '1.02': laplaceIntegralFunctionValue = 0.346135769627265; break
        case '1.03': laplaceIntegralFunctionValue = 0.348494997211656; break
        case '1.04': laplaceIntegralFunctionValue = 0.350830049669019; break
        case '1.05': laplaceIntegralFunctionValue = 0.353140943624104; break
        case '1.06': laplaceIntegralFunctionValue = 0.35542770033609; break
        case '1.07': laplaceIntegralFunctionValue = 0.357690345644061; break
        case '1.08': laplaceIntegralFunctionValue = 0.359928909911231; break
        case '1.09': laplaceIntegralFunctionValue = 0.362143427967965; break
        case '1.10': laplaceIntegralFunctionValue = 0.364333939053617; break
        case '1.11': laplaceIntegralFunctionValue = 0.366500486757253; break
        case '1.12': laplaceIntegralFunctionValue = 0.368643118957269; break
        case '1.13': laplaceIntegralFunctionValue = 0.370761887759982; break
        case '1.14': laplaceIntegralFunctionValue = 0.372856849437202; break
        case '1.15': laplaceIntegralFunctionValue = 0.37492806436285; break
        case '1.16': laplaceIntegralFunctionValue = 0.376975596948657; break
        case '1.17': laplaceIntegralFunctionValue = 0.378999515578982; break
        case '1.18': laplaceIntegralFunctionValue = 0.380999892544799; break
        case '1.19': laplaceIntegralFunctionValue = 0.382976803976891; break
        case '1.20': laplaceIntegralFunctionValue = 0.384930329778292; break
        case '1.21': laplaceIntegralFunctionValue = 0.386860553556023; break
        case '1.22': laplaceIntegralFunctionValue = 0.388767562552165; break
        case '1.23': laplaceIntegralFunctionValue = 0.390651447574308; break
        case '1.24': laplaceIntegralFunctionValue = 0.392512302925413; break
        case '1.25': laplaceIntegralFunctionValue = 0.394350226333145; break
        case '1.26': laplaceIntegralFunctionValue = 0.3961653188787; break
        case '1.27': laplaceIntegralFunctionValue = 0.397957684925181; break
        case '1.28': laplaceIntegralFunctionValue = 0.399727432045558; break
        case '1.29': laplaceIntegralFunctionValue = 0.401474670950252; break
        case '1.30': laplaceIntegralFunctionValue = 0.40319951541439; break
        case '1.31': laplaceIntegralFunctionValue = 0.404902082204761; break
        case '1.32': laplaceIntegralFunctionValue = 0.406582491006528; break
        case '1.33': laplaceIntegralFunctionValue = 0.408240864349719; break
        case '1.34': laplaceIntegralFunctionValue = 0.409877327535548; break
        case '1.35': laplaceIntegralFunctionValue = 0.411492008562598; break
        case '1.36': laplaceIntegralFunctionValue = 0.413085038052915; break
        case '1.37': laplaceIntegralFunctionValue = 0.414656549178033; break
        case '1.38': laplaceIntegralFunctionValue = 0.416206677584986; break
        case '1.39': laplaceIntegralFunctionValue = 0.417735561322331; break
        case '1.40': laplaceIntegralFunctionValue = 0.419243340766229; break
        case '1.41': laplaceIntegralFunctionValue = 0.420730158546608; break
        case '1.42': laplaceIntegralFunctionValue = 0.422196159473454; break
        case '1.43': laplaceIntegralFunctionValue = 0.423641490463261; break
        case '1.44': laplaceIntegralFunctionValue = 0.425066300465673; break
        case '1.45': laplaceIntegralFunctionValue = 0.426470740390351; break
        case '1.46': laplaceIntegralFunctionValue = 0.427854963034106; break
        case '1.47': laplaceIntegralFunctionValue = 0.429219123008315; break
        case '1.48': laplaceIntegralFunctionValue = 0.430563376666668; break
        case '1.49': laplaceIntegralFunctionValue = 0.431887882033274; break
        case '1.50': laplaceIntegralFunctionValue = 0.433192798731142; break
        case '1.51': laplaceIntegralFunctionValue = 0.434478287911084; break
        case '1.52': laplaceIntegralFunctionValue = 0.435744512181064; break
        case '1.53': laplaceIntegralFunctionValue = 0.436991635536022; break
        case '1.54': laplaceIntegralFunctionValue = 0.438219823288188; break
        case '1.55': laplaceIntegralFunctionValue = 0.439429241997941; break
        case '1.56': laplaceIntegralFunctionValue = 0.440620059405207; break
        case '1.57': laplaceIntegralFunctionValue = 0.441792444361447; break
        case '1.58': laplaceIntegralFunctionValue = 0.442946566762246; break
        case '1.59': laplaceIntegralFunctionValue = 0.444082597480531; break
        case '1.60': laplaceIntegralFunctionValue = 0.445200708300442; break
        case '1.61': laplaceIntegralFunctionValue = 0.44630107185188; break
        case '1.62': laplaceIntegralFunctionValue = 0.447383861545748; break
        case '1.63': laplaceIntegralFunctionValue = 0.448449251509911; break
        case '1.64': laplaceIntegralFunctionValue = 0.449497416525896; break
        case '1.65': laplaceIntegralFunctionValue = 0.450528531966352; break
        case '1.66': laplaceIntegralFunctionValue = 0.451542773733277; break
        case '1.67': laplaceIntegralFunctionValue = 0.452540318197053; break
        case '1.68': laplaceIntegralFunctionValue = 0.45352134213628; break
        case '1.69': laplaceIntegralFunctionValue = 0.45448602267845; break
        case '1.70': laplaceIntegralFunctionValue = 0.455434537241457; break
        case '1.71': laplaceIntegralFunctionValue = 0.456367063475968; break
        case '1.72': laplaceIntegralFunctionValue = 0.457283779208671; break
        case '1.73': laplaceIntegralFunctionValue = 0.458184862386405; break
        case '1.74': laplaceIntegralFunctionValue = 0.459070491021192; break
        case '1.75': laplaceIntegralFunctionValue = 0.459940843136183; break
        case '1.76': laplaceIntegralFunctionValue = 0.460796096712518; break
        case '1.77': laplaceIntegralFunctionValue = 0.461636429637129; break
        case '1.78': laplaceIntegralFunctionValue = 0.462462019651483; break
        case '1.79': laplaceIntegralFunctionValue = 0.463273044301273; break
        case '1.80': laplaceIntegralFunctionValue = 0.464069680887074; break
        case '1.81': laplaceIntegralFunctionValue = 0.464852106415961; break
        case '1.82': laplaceIntegralFunctionValue = 0.46562049755411; break
        case '1.83': laplaceIntegralFunctionValue = 0.466375030580372; break
        case '1.84': laplaceIntegralFunctionValue = 0.467115881340836; break
        case '1.85': laplaceIntegralFunctionValue = 0.467843225204386; break
        case '1.86': laplaceIntegralFunctionValue = 0.468557237019247; break
        case '1.87': laplaceIntegralFunctionValue = 0.469258091070534; break
        case '1.88': laplaceIntegralFunctionValue = 0.4699459610388; break
        case '1.89': laplaceIntegralFunctionValue = 0.470621019959591; break
        case '1.90': laplaceIntegralFunctionValue = 0.471283440183998; break
        case '1.91': laplaceIntegralFunctionValue = 0.471933393340228; break
        case '1.92': laplaceIntegralFunctionValue = 0.472571050296163; break
        case '1.93': laplaceIntegralFunctionValue = 0.473196581122945; break
        case '1.94': laplaceIntegralFunctionValue = 0.473810155059547; break
        case '1.95': laplaceIntegralFunctionValue = 0.474411940478361; break
        case '1.96': laplaceIntegralFunctionValue = 0.475002104851779; break
        case '1.97': laplaceIntegralFunctionValue = 0.475580814719777; break
        case '1.98': laplaceIntegralFunctionValue = 0.476148235658491; break
        case '1.99': laplaceIntegralFunctionValue = 0.476704532249788; break
        case '2.00': laplaceIntegralFunctionValue = 0.477249868051821; break
        case '2.01': laplaceIntegralFunctionValue = 0.477784405570568; break
        case '2.02': laplaceIntegralFunctionValue = 0.478308306232353; break
        case '2.03': laplaceIntegralFunctionValue = 0.478821730357328; break
        case '2.04': laplaceIntegralFunctionValue = 0.47932483713393; break
        case '2.05': laplaceIntegralFunctionValue = 0.479817784594296; break
        case '2.06': laplaceIntegralFunctionValue = 0.480300729590623; break
        case '2.07': laplaceIntegralFunctionValue = 0.480773827772483; break
        case '2.08': laplaceIntegralFunctionValue = 0.481237233565062; break
        case '2.09': laplaceIntegralFunctionValue = 0.481691100148341; break
        case '2.10': laplaceIntegralFunctionValue = 0.482135579437183; break
        case '2.11': laplaceIntegralFunctionValue = 0.482570822062343; break
        case '2.12': laplaceIntegralFunctionValue = 0.482996977352367; break
        case '2.13': laplaceIntegralFunctionValue = 0.483414193316395; break
        case '2.14': laplaceIntegralFunctionValue = 0.483822616627834; break
        case '2.15': laplaceIntegralFunctionValue = 0.484222392608909; break
        case '2.16': laplaceIntegralFunctionValue = 0.484613665216075; break
        case '2.17': laplaceIntegralFunctionValue = 0.484996577026268; break
        case '2.18': laplaceIntegralFunctionValue = 0.485371269224011; break
        case '2.19': laplaceIntegralFunctionValue = 0.485737881589331; break
        case '2.20': laplaceIntegralFunctionValue = 0.486096552486501; break
        case '2.21': laplaceIntegralFunctionValue = 0.48644741885358; break
        case '2.22': laplaceIntegralFunctionValue = 0.486790616192744; break
        case '2.23': laplaceIntegralFunctionValue = 0.487126278561398; break
        case '2.24': laplaceIntegralFunctionValue = 0.487454538564054; break
        case '2.25': laplaceIntegralFunctionValue = 0.487775527344955; break
        case '2.26': laplaceIntegralFunctionValue = 0.488089374581453; break
        case '2.27': laplaceIntegralFunctionValue = 0.488396208478097; break
        case '2.28': laplaceIntegralFunctionValue = 0.488696155761447; break
        case '2.29': laplaceIntegralFunctionValue = 0.488989341675589; break
        case '2.30': laplaceIntegralFunctionValue = 0.489275889978324; break
        case '2.31': laplaceIntegralFunctionValue = 0.489555922938049; break
        case '2.32': laplaceIntegralFunctionValue = 0.48982956133128; break
        case '2.33': laplaceIntegralFunctionValue = 0.490096924440836; break
        case '2.34': laplaceIntegralFunctionValue = 0.490358130054641; break
        case '2.35': laplaceIntegralFunctionValue = 0.490613294465162; break
        case '2.36': laplaceIntegralFunctionValue = 0.490862532469427; break
        case '2.37': laplaceIntegralFunctionValue = 0.491105957369663; break
        case '2.38': laplaceIntegralFunctionValue = 0.491343680974483; break
        case '2.39': laplaceIntegralFunctionValue = 0.491575813600654; break
        case '2.40': laplaceIntegralFunctionValue = 0.491802464075404; break
        case '2.41': laplaceIntegralFunctionValue = 0.492023739739266; break
        case '2.42': laplaceIntegralFunctionValue = 0.492239746449446; break
        case '2.43': laplaceIntegralFunctionValue = 0.492450588583691; break
        case '2.44': laplaceIntegralFunctionValue = 0.492656369044652; break
        case '2.45': laplaceIntegralFunctionValue = 0.492857189264729; break
        case '2.46': laplaceIntegralFunctionValue = 0.493053149211376; break
        case '2.47': laplaceIntegralFunctionValue = 0.493244347392859; break
        case '2.48': laplaceIntegralFunctionValue = 0.493430880864453; break
        case '2.49': laplaceIntegralFunctionValue = 0.493612845235057; break
        case '2.50': laplaceIntegralFunctionValue = 0.493790334674224; break
        case '2.51': laplaceIntegralFunctionValue = 0.493963441919587; break
        case '2.52': laplaceIntegralFunctionValue = 0.494132258284667; break
        case '2.53': laplaceIntegralFunctionValue = 0.494296873667049; break
        case '2.54': laplaceIntegralFunctionValue = 0.494457376556917; break
        case '2.55': laplaceIntegralFunctionValue = 0.494613854045933; break
        case '2.56': laplaceIntegralFunctionValue = 0.494766391836444; break
        case '2.57': laplaceIntegralFunctionValue = 0.494915074251009; break
        case '2.58': laplaceIntegralFunctionValue = 0.495059984242229; break
        case '2.59': laplaceIntegralFunctionValue = 0.495201203402874; break
        case '2.60': laplaceIntegralFunctionValue = 0.495338811976281; break
        case '2.61': laplaceIntegralFunctionValue = 0.495472888867033; break
        case '2.62': laplaceIntegralFunctionValue = 0.495603511651879; break
        case '2.63': laplaceIntegralFunctionValue = 0.495730756590911; break
        case '2.64': laplaceIntegralFunctionValue = 0.495854698638964; break
        case '2.65': laplaceIntegralFunctionValue = 0.495975411457242; break
        case '2.66': laplaceIntegralFunctionValue = 0.496092967425147; break
        case '2.67': laplaceIntegralFunctionValue = 0.496207437652314; break
        case '2.68': laplaceIntegralFunctionValue = 0.496318891990825; break
        case '2.69': laplaceIntegralFunctionValue = 0.496427399047601; break
        case '2.70': laplaceIntegralFunctionValue = 0.496533026196959; break
        case '2.71': laplaceIntegralFunctionValue = 0.496635839593331; break
        case '2.72': laplaceIntegralFunctionValue = 0.496735904184109; break
        case '2.73': laplaceIntegralFunctionValue = 0.496833283722642; break
        case '2.74': laplaceIntegralFunctionValue = 0.49692804078135; break
        case '2.75': laplaceIntegralFunctionValue = 0.497020236764946; break
        case '2.76': laplaceIntegralFunctionValue = 0.497109931923774; break
        case '2.77': laplaceIntegralFunctionValue = 0.497197185367235; break
        case '2.78': laplaceIntegralFunctionValue = 0.497282055077299; break
        case '2.79': laplaceIntegralFunctionValue = 0.497364597922095; break
        case '2.80': laplaceIntegralFunctionValue = 0.497444869669572; break
        case '2.81': laplaceIntegralFunctionValue = 0.497522925001214; break
        case '2.82': laplaceIntegralFunctionValue = 0.497598817525811; break
        case '2.83': laplaceIntegralFunctionValue = 0.497672599793269; break
        case '2.84': laplaceIntegralFunctionValue = 0.497744323308457; break
        case '2.85': laplaceIntegralFunctionValue = 0.497814038545087; break
        case '2.86': laplaceIntegralFunctionValue = 0.497881794959595; break
        case '2.87': laplaceIntegralFunctionValue = 0.497947641005061; break
        case '2.88': laplaceIntegralFunctionValue = 0.498011624145106; break
        case '2.89': laplaceIntegralFunctionValue = 0.498073790867812; break
        case '2.90': laplaceIntegralFunctionValue = 0.498134186699616; break
        case '2.91': laplaceIntegralFunctionValue = 0.498192856219194; break
        case '2.92': laplaceIntegralFunctionValue = 0.498249843071324; break
        case '2.93': laplaceIntegralFunctionValue = 0.498305189980723; break
        case '2.94': laplaceIntegralFunctionValue = 0.498358938765843; break
        case '2.95': laplaceIntegralFunctionValue = 0.498411130352635; break
        case '2.96': laplaceIntegralFunctionValue = 0.498461804788262; break
        case '2.97': laplaceIntegralFunctionValue = 0.498511001254763; break
        case '2.98': laplaceIntegralFunctionValue = 0.49855875808266; break
        case '2.99': laplaceIntegralFunctionValue = 0.498605112764508; break
        case '3.00': laplaceIntegralFunctionValue = 0.49865010196837; break
        case '3.01': laplaceIntegralFunctionValue = 0.498693761551231; break
        case '3.02': laplaceIntegralFunctionValue = 0.498736126572328; break
        case '3.03': laplaceIntegralFunctionValue = 0.498777231306408; break
        case '3.04': laplaceIntegralFunctionValue = 0.498817109256896; break
        case '3.05': laplaceIntegralFunctionValue = 0.498855793168977; break
        case '3.06': laplaceIntegralFunctionValue = 0.498893315042591; break
        case '3.07': laplaceIntegralFunctionValue = 0.498929706145321; break
        case '3.08': laplaceIntegralFunctionValue = 0.498964997025197; break
        case '3.09': laplaceIntegralFunctionValue = 0.498999217523386; break
        case '3.10': laplaceIntegralFunctionValue = 0.499032396786781; break
        case '3.11': laplaceIntegralFunctionValue = 0.499064563280486; break
        case '3.12': laplaceIntegralFunctionValue = 0.499095744800178; break
        case '3.13': laplaceIntegralFunctionValue = 0.499125968484368; break
        case '3.14': laplaceIntegralFunctionValue = 0.499155260826541; break
        case '3.15': laplaceIntegralFunctionValue = 0.499183647687172; break
        case '3.16': laplaceIntegralFunctionValue = 0.499211154305624; break
        case '3.17': laplaceIntegralFunctionValue = 0.499237805311933; break
        case '3.18': laplaceIntegralFunctionValue = 0.499263624738446; break
        case '3.19': laplaceIntegralFunctionValue = 0.499288636031355; break
        case '3.20': laplaceIntegralFunctionValue = 0.499312862062084; break
        case '3.21': laplaceIntegralFunctionValue = 0.49933632513856; break
        case '3.22': laplaceIntegralFunctionValue = 0.49935904701634; break
        case '3.23': laplaceIntegralFunctionValue = 0.499381048909613; break
        case '3.24': laplaceIntegralFunctionValue = 0.499402351502065; break
        case '3.25': laplaceIntegralFunctionValue = 0.499422974957609; break
        case '3.26': laplaceIntegralFunctionValue = 0.499442938930975; break
        case '3.27': laplaceIntegralFunctionValue = 0.49946226257817; break
        case '3.28': laplaceIntegralFunctionValue = 0.499480964566793; break
        case '3.29': laplaceIntegralFunctionValue = 0.499499063086214; break
        case '3.30': laplaceIntegralFunctionValue = 0.499516575857616; break
        case '3.31': laplaceIntegralFunctionValue = 0.499533520143892; break
        case '3.32': laplaceIntegralFunctionValue = 0.499549912759408; break
        case '3.33': laplaceIntegralFunctionValue = 0.499565770079618; break
        case '3.34': laplaceIntegralFunctionValue = 0.49958110805055; break
        case '3.35': laplaceIntegralFunctionValue = 0.499595942198136; break
        case '3.36': laplaceIntegralFunctionValue = 0.499610287637418; break
        case '3.37': laplaceIntegralFunctionValue = 0.4996241590816; break
        case '3.38': laplaceIntegralFunctionValue = 0.499637570850967; break
        case '3.39': laplaceIntegralFunctionValue = 0.499650536881662; break
        case '3.40': laplaceIntegralFunctionValue = 0.499663070734324; break
        case '3.41': laplaceIntegralFunctionValue = 0.499675185602581; break
        case '3.42': laplaceIntegralFunctionValue = 0.499686894321419; break
        case '3.43': laplaceIntegralFunctionValue = 0.499698209375391; break
        case '3.44': laplaceIntegralFunctionValue = 0.499709142906709; break
        case '3.45': laplaceIntegralFunctionValue = 0.499719706723184; break
        case '3.46': laplaceIntegralFunctionValue = 0.499729912306037; break
        case '3.47': laplaceIntegralFunctionValue = 0.499739770817573; break
        case '3.48': laplaceIntegralFunctionValue = 0.49974929310872; break
        case '3.49': laplaceIntegralFunctionValue = 0.499758489726432; break
        case '3.50': laplaceIntegralFunctionValue = 0.499767370920965; break
        case '3.51': laplaceIntegralFunctionValue = 0.499775946653009; break
        case '3.52': laplaceIntegralFunctionValue = 0.499784226600705; break
        case '3.53': laplaceIntegralFunctionValue = 0.49979222016652; break
        case '3.54': laplaceIntegralFunctionValue = 0.499799936483993; break
        case '3.55': laplaceIntegralFunctionValue = 0.499807384424364; break
        case '3.56': laplaceIntegralFunctionValue = 0.499814572603067; break
        case '3.57': laplaceIntegralFunctionValue = 0.499821509386095; break
        case '3.58': laplaceIntegralFunctionValue = 0.499828202896254; break
        case '3.59': laplaceIntegralFunctionValue = 0.49983466101928; break
        case '3.60': laplaceIntegralFunctionValue = 0.499840891409842; break
        case '3.61': laplaceIntegralFunctionValue = 0.499846901497426; break
        case '3.62': laplaceIntegralFunctionValue = 0.499852698492092; break
        case '3.63': laplaceIntegralFunctionValue = 0.499858289390124; break
        case '3.64': laplaceIntegralFunctionValue = 0.499863680979554; break
        case '3.65': laplaceIntegralFunctionValue = 0.49986887984558; break
        case '3.66': laplaceIntegralFunctionValue = 0.499873892375861; break
        case '3.67': laplaceIntegralFunctionValue = 0.499878724765715; break
        case '3.68': laplaceIntegralFunctionValue = 0.499883383023184; break
        case '3.69': laplaceIntegralFunctionValue = 0.499887872974018; break
        case '3.70': laplaceIntegralFunctionValue = 0.499892200266523; break
        case '3.71': laplaceIntegralFunctionValue = 0.499896370376326; break
        case '3.72': laplaceIntegralFunctionValue = 0.499900388611024; break
        case '3.73': laplaceIntegralFunctionValue = 0.499904260114731; break
        case '3.74': laplaceIntegralFunctionValue = 0.499907989872526; break
        case '3.75': laplaceIntegralFunctionValue = 0.499911582714799; break
        case '3.76': laplaceIntegralFunctionValue = 0.499915043321502; break
        case '3.77': laplaceIntegralFunctionValue = 0.499918376226297; break
        case '3.78': laplaceIntegralFunctionValue = 0.499921585820617; break
        case '3.79': laplaceIntegralFunctionValue = 0.499924676357622; break
        case '3.80': laplaceIntegralFunctionValue = 0.499927651956075; break
        case '3.81': laplaceIntegralFunctionValue = 0.49993051660412; break
        case '3.82': laplaceIntegralFunctionValue = 0.49993327416297; break
        case '3.83': laplaceIntegralFunctionValue = 0.499935928370511; break
        case '3.84': laplaceIntegralFunctionValue = 0.499938482844817; break
        case '3.85': laplaceIntegralFunctionValue = 0.499940941087581; break
        case '3.86': laplaceIntegralFunctionValue = 0.499943306487466; break
        case '3.87': laplaceIntegralFunctionValue = 0.499945582323366; break
        case '3.88': laplaceIntegralFunctionValue = 0.499947771767598; break
        case '3.89': laplaceIntegralFunctionValue = 0.499949877889004; break
        case '3.90': laplaceIntegralFunctionValue = 0.499951903655982; break
        case '3.91': laplaceIntegralFunctionValue = 0.499953851939444; break
        case '3.92': laplaceIntegralFunctionValue = 0.499955725515688; break
        case '3.93': laplaceIntegralFunctionValue = 0.499957527069211; break
        case '3.94': laplaceIntegralFunctionValue = 0.499959259195441; break
        case '3.95': laplaceIntegralFunctionValue = 0.499960924403402; break
        case '3.96': laplaceIntegralFunctionValue = 0.499962525118309; break
        case '3.97': laplaceIntegralFunctionValue = 0.499964063684097; break
        case '3.98': laplaceIntegralFunctionValue = 0.499965542365885; break
        case '3.99': laplaceIntegralFunctionValue = 0.499966963352371; break
        case '4.00': laplaceIntegralFunctionValue = 0.499968328758167; break
        case '4.01': laplaceIntegralFunctionValue = 0.499969640626073; break
        case '4.02': laplaceIntegralFunctionValue = 0.499970900929288; break
        case '4.03': laplaceIntegralFunctionValue = 0.499972111573559; break
        case '4.04': laplaceIntegralFunctionValue = 0.499973274399281; break
        case '4.05': laplaceIntegralFunctionValue = 0.499974391183526; break
        case '4.06': laplaceIntegralFunctionValue = 0.499975463642034; break
        case '4.07': laplaceIntegralFunctionValue = 0.499976493431131; break
        case '4.08': laplaceIntegralFunctionValue = 0.499977482149611; break
        case '4.09': laplaceIntegralFunctionValue = 0.499978431340552; break
        case '4.10': laplaceIntegralFunctionValue = 0.499979342493087; break
        case '4.11': laplaceIntegralFunctionValue = 0.499980217044132; break
        case '4.12': laplaceIntegralFunctionValue = 0.499981056380049; break
        case '4.13': laplaceIntegralFunctionValue = 0.499981861838282; break
        case '4.14': laplaceIntegralFunctionValue = 0.499982634708926; break
        case '4.15': laplaceIntegralFunctionValue = 0.49998337623627; break
        case '4.16': laplaceIntegralFunctionValue = 0.499984087620281; break
        case '4.17': laplaceIntegralFunctionValue = 0.499984770018052; break
        case '4.18': laplaceIntegralFunctionValue = 0.499985424545209; break
        case '4.19': laplaceIntegralFunctionValue = 0.499986052277273; break
        case '4.20': laplaceIntegralFunctionValue = 0.499986654250984; break
        case '4.21': laplaceIntegralFunctionValue = 0.499987231465586; break
        case '4.22': laplaceIntegralFunctionValue = 0.499987784884075; break
        case '4.23': laplaceIntegralFunctionValue = 0.499988315434405; break
        case '4.24': laplaceIntegralFunctionValue = 0.499988824010668; break
        case '4.25': laplaceIntegralFunctionValue = 0.499989311474225; break
        case '4.26': laplaceIntegralFunctionValue = 0.499989778654816; break
        case '4.27': laplaceIntegralFunctionValue = 0.499990226351627; break
        case '4.28': laplaceIntegralFunctionValue = 0.49999065533433; break
        case '4.29': laplaceIntegralFunctionValue = 0.499991066344087; break
        case '4.30': laplaceIntegralFunctionValue = 0.499991460094529; break
        case '4.31': laplaceIntegralFunctionValue = 0.499991837272697; break
        case '4.32': laplaceIntegralFunctionValue = 0.499992198539962; break
        case '4.33': laplaceIntegralFunctionValue = 0.499992544532908; break
        case '4.34': laplaceIntegralFunctionValue = 0.499992875864198; break
        case '4.35': laplaceIntegralFunctionValue = 0.4999931931234; break
        case '4.36': laplaceIntegralFunctionValue = 0.499993496877799; break
        case '4.37': laplaceIntegralFunctionValue = 0.499993787673173; break
        case '4.38': laplaceIntegralFunctionValue = 0.499994066034554; break
        case '4.39': laplaceIntegralFunctionValue = 0.499994332466958; break
        case '4.40': laplaceIntegralFunctionValue = 0.499994587456092; break
        case '4.41': laplaceIntegralFunctionValue = 0.499994831469043; break
        case '4.42': laplaceIntegralFunctionValue = 0.499995064954938; break
        case '4.43': laplaceIntegralFunctionValue = 0.499995288345588; break
        case '4.44': laplaceIntegralFunctionValue = 0.499995502056111; break
        case '4.45': laplaceIntegralFunctionValue = 0.49999570648553; break
        case '4.46': laplaceIntegralFunctionValue = 0.499995902017353; break
        case '4.47': laplaceIntegralFunctionValue = 0.49999608902014; break
        case '4.48': laplaceIntegralFunctionValue = 0.499996267848039; break
        case '4.49': laplaceIntegralFunctionValue = 0.49999643884132; break
        case '4.50': laplaceIntegralFunctionValue = 0.499996602326875; break
        case '4.51': laplaceIntegralFunctionValue = 0.499996758618713; break
        case '4.52': laplaceIntegralFunctionValue = 0.499996908018431; break
        case '4.53': laplaceIntegralFunctionValue = 0.499997050815677; break
        case '4.54': laplaceIntegralFunctionValue = 0.499997187288588; break
        case '4.55': laplaceIntegralFunctionValue = 0.499997317704221; break
        case '4.56': laplaceIntegralFunctionValue = 0.499997442318961; break
        case '4.57': laplaceIntegralFunctionValue = 0.499997561378926; break
        case '4.58': laplaceIntegralFunctionValue = 0.49999767512035; break
        case '4.59': laplaceIntegralFunctionValue = 0.499997783769952; break
        case '4.60': laplaceIntegralFunctionValue = 0.499997887545297; break
        case '4.61': laplaceIntegralFunctionValue = 0.499997986655145; break
        case '4.62': laplaceIntegralFunctionValue = 0.49999808129978; break
        case '4.63': laplaceIntegralFunctionValue = 0.499998171671336; break
        case '4.64': laplaceIntegralFunctionValue = 0.499998257954109; break
        case '4.65': laplaceIntegralFunctionValue = 0.499998340324856; break
        case '4.66': laplaceIntegralFunctionValue = 0.499998418953081; break
        case '4.67': laplaceIntegralFunctionValue = 0.499998494001322; break
        case '4.68': laplaceIntegralFunctionValue = 0.499998565625416; break
        case '4.69': laplaceIntegralFunctionValue = 0.499998633974755; break
        case '4.70': laplaceIntegralFunctionValue = 0.499998699192546; break
        case '4.71': laplaceIntegralFunctionValue = 0.499998761416043; break
        case '4.72': laplaceIntegralFunctionValue = 0.499998820776783; break
        case '4.73': laplaceIntegralFunctionValue = 0.499998877400815; break
        case '4.74': laplaceIntegralFunctionValue = 0.499998931408905; break
        case '4.75': laplaceIntegralFunctionValue = 0.499998982916757; break
        case '4.76': laplaceIntegralFunctionValue = 0.499999032035204; break
        case '4.77': laplaceIntegralFunctionValue = 0.499999078870404; break
        case '4.78': laplaceIntegralFunctionValue = 0.499999123524027; break
        case '4.79': laplaceIntegralFunctionValue = 0.499999166093434; break
        case '4.80': laplaceIntegralFunctionValue = 0.499999206671848; break
        case '4.81': laplaceIntegralFunctionValue = 0.499999245348521; break
        case '4.82': laplaceIntegralFunctionValue = 0.499999282208893; break
        case '4.83': laplaceIntegralFunctionValue = 0.499999317334747; break
        case '4.84': laplaceIntegralFunctionValue = 0.499999350804357; break
        case '4.85': laplaceIntegralFunctionValue = 0.499999382692628; break
        case '4.86': laplaceIntegralFunctionValue = 0.499999413071236; break
        case '4.87': laplaceIntegralFunctionValue = 0.499999442008757; break
        case '4.88': laplaceIntegralFunctionValue = 0.499999469570797; break
        case '4.89': laplaceIntegralFunctionValue = 0.499999495820111; break
        case '4.90': laplaceIntegralFunctionValue = 0.499999520816723; break
        case '4.91': laplaceIntegralFunctionValue = 0.499999544618035; break
        case '4.92': laplaceIntegralFunctionValue = 0.499999567278938; break
        case '4.93': laplaceIntegralFunctionValue = 0.499999588851916; break
        case '4.94': laplaceIntegralFunctionValue = 0.499999609387146; break
        case '4.95': laplaceIntegralFunctionValue = 0.499999628932592; break
        case '4.96': laplaceIntegralFunctionValue = 0.499999647534102; break
        case '4.97': laplaceIntegralFunctionValue = 0.499999665235492; break
        case '4.98': laplaceIntegralFunctionValue = 0.499999682078634; break
        case '4.99': laplaceIntegralFunctionValue = 0.499999698103538; break
        case '5.00': laplaceIntegralFunctionValue = 0.499999713348428; break
    }

    return laplaceIntegralFunctionValue
}
