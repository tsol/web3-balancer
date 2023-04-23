const knownTokensString = `ary bnb chips dent eon generic icp lun nebl pasl ray sky ten vrc xp
 0xbtc ast bnt chsb dew eop gin icx maid neos paxg rcn slr tern vrsc xrp
 1inch atlas bnty chz dgb eos glxt ignis mana neo pax rdd sls tgch vtc xsg
 2give atm booty cix dgd eqli gmr ilk matic neu pay rdn smart theta vtho x
 aave atom bos clam dlt equa gmt ink max nexo payx ren sngls tix wabi xtz
 abt audr bpt cloak dnt etc gno ins mcap ngc pink rep snm tkn wan xuc
 actn aury bq cmm dock ethos gnt ion mco nio pirl repv2 snt tks waves xvc
 act auto brd cmt doge eth gold iop mda nkn pivx req snx tnb wax xvg
 ada avax bsd cnd dot etn grc iost mds nlc2 plr rhoc soc tnc wbtc xzc
 add aywa bsv cnx drgn etp grin iotx med nlg poa ric sol tnt wgr yfi
 adx bab btcd cny drop eur grs iq meetone nmc poe rise spacehbit tomo wicc yoyow
 aeon bal btch cob d evx grt itc mft nmr polis rlc spank tpay wings zcl
 ae band btcp colx dta exmo gsc jnt miota npxs poly rpx sphtx trig wpr zec
 aeur bat btc comp dth exp gto jpy mith ntbc pot r srn trtl wtc zel
 agi bay btcz coqui dtr fair gup kcs mkr nuls powr rub stak trx xas zen
 agrs bcbc btdx cred ebst fct gusd kin mln nxs ppc rvn start tusd xbc zest
 aion bcc btg crpt eca fida gvt klown mnx nxt ppp ryo steem tzc xbp zilla
 algo bcd btm crv edg fil gxs kmd mnz oax ppt safemoon storj ubq xby zil
 amb bch bts crw edoge fjc gzr knc moac ok pre safe storm uma xcp zrx
 ampl bcio btt cs edo fldc hight krb mod omg prl sai stox uni xdn
 amp bcn btx ctr ela flo hns ksm mona omni pungo salt stq unity xem
 ankr bco burst ctxc elec flux hodl lbc msr one pura sand strat usdc xin
 ant bcpt busd cvc elf fsn hot lend mth ong qash san stx usd xlm
 ape bdl bze dai elix ftc hpb leo mtl ont qiwi sbd sub usdt xmcc
 apex beam call dash ella fuel hsr link music oot qlc sberbank sumo utk xmg
 appc bela cc data emb fun html lkk mzc ost qnt sc sushi veri xmo
 ardr bix cdn dat emc2 game ht loom nano ox qrl ser sys vet xmr
 arg blcn cdt dbc emc gas huc lpt nas oxt qsp shift taas via xmy
 ark blk cenz dcn eng gbp husd lrc nav oxy qtum sib tau vibe xpa
 arn block chain dcr enj gbx hush lsk ncash part rads sin tbx vib xpm
 arnx blz chat deez entrp gbyte icn ltc ndz pasc rap skl tel vivo xpr`;

export const knownTokens = {};

knownTokensString.split(/\s+/).forEach((symbol) => {
  knownTokens[symbol] = true;
});
