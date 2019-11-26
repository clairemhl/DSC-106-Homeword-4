var text = 'Entrepreneur Elizabeth Holmes creates bio-tech company skyrockets fame estimated value billions. When federal agencies begin investigating company, integrity called doubt.A young woman charged brutal murder sent isolated farm await execution.The life novelist Jazz Age socialite Zelda Fitzgerald marriage author F. Scott Fitzgerald.Jean Grey begins develop incredible powers corrupt turn Dark Phoenix, causing X-Men decide life worth humanity.Commercial JOY, new fragrance Christian Dior starring actress Jennifer Lawrence.Ballerina Dominika Egorova recruited \'Sparrow School,\' Russian intelligence service forced use body weapon. Her first mission, targeting C.I.A. agent, threatens unravel security nations.A couple\'s relationship tested uninvited guests arrive home, disrupting tranquil existence.A spacecraft traveling distant colony planet transporting thousands people malfunction sleep chambers. As result, two passengers awakened 90 years early.In 1980s X-Men must defeat ancient all-powerful mutant, En Sabah Nur, intends thrive bringing destruction world.Joy story title character, rose become founder matriarch powerful family business dynasty.Katniss team rebels District 13 prepare final battle decide fate Panem.Katniss Everdeen District 13 shatters games forever. Under leadership President Coin advice trusted friends, Katniss spreads wings fights save Peeta nation moved courage.In Depression-era North Carolina, future George Pemberton\'s timber empire becomes complicated marries Serena.The X-Men send Wolverine past desperate effort change history prevent event results doom humans mutants.A con man, Irving Rosenfeld, along seductive partner Sydney Prosser, forced work wild F.B.I. Agent, Richie DiMaso, pushes world Jersey powerbrokers Mafia.Katniss Everdeen Peeta Mellark become targets Capitol victory 74th Hunger Games sparks rebellion Districts Panem.The daughter famous actress faces mother\'s dark past.After moving mother small town, teenager finds accident happened house end street. Things get complicated befriends boy survivor accident.After stint mental institution, former teacher Pat Solitano moves back parents tries reconcile ex-wife. Things get challenging Pat meets Tiffany, mysterious girl problems own.Katniss Everdeen voluntarily takes younger sister\'s place Hunger Games: televised competition two teenagers twelve Districts Panem chosen random fight death.In 1960s, superpowered humans Charles Xavier Erik Lensherr work together find others like them, Erik\'s vengeful pursuit ambitious mutant ruined life causes schism divide them.A troubled husband executive adopts beaver hand-puppet sole means communication.A British college student falls American student, separated banned U.S. overstaying visa.An unflinching Ozark Mountain girl hacks dangerous social terrain hunts drug-dealing father trying keep family intact.A story revolving around life therapist, Bill Pearson, family.A drama two-tiered storyline concerning mother daughter try form bond young woman\'s difficult childhood.A dramatization Lori Petty\'s teenage years spent small town Iowa.April (age 15) running one bad situation another, hoping find answer involve nudity, falls group confused kids chasing dreams. The black widow web sexy, pot-dealing Sally.Suburban mom Allison DuBois attempts balance family life solving mysteries using special gift. The dead send visions deaths crimes sleeps.A parody popular teen  dramas "Beverly Hills, 90210," "Dawson\'s Creek," "Laguna Beach."The Philadelphia homicide squad\'s lone female detective finds calling assigned "cold cases", older crimes never solved.A  lives government agents live Washington D.C. neighborhood.Adrian Monk brilliant San Francisco detective, whose obsessive compulsive disorder happens get way.Plot unknown. Described comedy sisters."Entertainment Tonight" #1 syndicated entertainment newsmagazine world.Celebrity information, hollywood gossip,  world entertainment.Dish Nation FOX syndicated   dishes celebrity  humorous commentary pop culture.Extra,   updates current events mass-entertainment business movies, , music, etc.The classic long-running prime time  investigative  magazine.Investigative journalist documentaries.Long-running factual programme reporting aspects life Britain.A  top stories entertainment celebrity .The weekday  ITV whole nation wakes to.Paul Joseph Watson argues Hollywood declining public gets wearier far-left politics.Jennifer Lawrence blames Donald Trump Hurricanes Harvey Irma. Paul Joseph Watson compares evangelical Christians blame hurricanes gays ISIS credit Allah\'s wrath.Good Morning Britain\'s summertime spin-off series, featuring entertainment , celebrity  topical discussions.A mix celebrity , musical performers, audience participation games, segments spotlighting real people extraordinary stories talents.Irish comedian Graham Norton hosts chat, includes chatting A-list celebrities, famous Red Chair game, live music, lots jokes fun Graham celebrities themselves.The Insider brings latest celebrity entertainment . The Insider tackles trending celebrity stories day, well exclusive  in-depth reporting.The FalconCast Awards honor excellence YouTube , video games movies year 2016.A live morning talk hosts Kelly Ripa, Ryan Seacrest special guests.Charlie Brooker covers funny side politics popular topics 2014.Taff - tabloid magazine.A haunted picture frame inner sexual fantasies 1876.Jeremy, movie goer, reviews movies points mistakes."Entertainment Tonight" #1 syndicated entertainment newsmagazine world.Eric Beth meet. Ridge organises afternoon Caroline, Thorne Brooke.Jimmy Kimmel  celebrities.A portrait extraordinary life career actor Anton Yelchin.Extra,   updates current events mass-entertainment business movies, , music, etc.This piece interesting footage Jennifer Lawrence learning moves information merged real ballerina Isabella Boylston\'s dancing Jennifer\'s final .This piece features production designer Maria Djurkovic offering insight Francis Lawrence went designing things aiming consistency despite wide variety locations.This piece focuses locations production design,  and, behind scenes footage.This piece features behind scenes footage brief  interspersed scenes .This piece features cast crew brief snippets discussing characters.The 90th Annual Academy Awards ceremony, hosted Jimmy Kimmel, celebrates  industry\'s biggest achievements year 2017.Dish Nation FOX syndicated  dishes celebrity  humorous commentary pop culture.A mix celebrity , musical performers, audience participation games, segments spotlighting real people extraordinary stories talents';
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container_wordcloud', {
    series: [{
        type: 'wordcloud',
        cropThreshold: 20,
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Jennifer Lawrence movie plot outlines' 
    }
});