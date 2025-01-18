import { v4 as uuidv4 } from 'uuid';

const baseAudioUrl = 'https://stream.chillhop.com/mp3';
const baseCoverUrl = 'https://cms.chillhop.com/media';

function chillHop() {
  return [
    {
      name: 'Spiral',
      cover:
        `${baseCoverUrl}/6825/square2a048a5780723e66fff64c3a60814ea64761284f.jpg`,
      artist: 'Monma, Misha',
      audio: `${baseAudioUrl}/8462`,
      color: ['#EF8EA9', '#401f37'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Today Feels Like Everyday',
      cover:
        `${baseCoverUrl}/11319/square08cbb0848f669e1bd8b5a5152c4b7d20edf1b499.jpg`,
      artist: 'Mama Aiuto',
      audio: `${baseAudioUrl}/12128`,
      color: ['#1b4f5d', '#58211e'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Celebrations',
      cover:
        `${baseCoverUrl}/3145/square0b2270e2865d7c9fb7ce840263bc6fb93f64f812.jpg`,
      artist: 'Mr. Käfer',
      audio: `${baseAudioUrl}/9497`,
      color: ['#EF8EA9', '#229585'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        `${baseCoverUrl}/10010/square0255e8b8c74c90d4a27c594b3452b2daafae608d.jpg`,
      artist: 'Aso, Middle School, Aviino',
      audio: `${baseAudioUrl}/10074`,
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        `${baseCoverUrl}/78126/squarecdc41272fb9e5ba0a6fcfd39b87b8a2e776a635c.jpg`,
      artist: 'Swørn',
      audio: `${baseAudioUrl}/9222`,
      color: ['#ACDEF9', '#F2BC61'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Going Back',
      cover:
        `${baseCoverUrl}/10524/square0e5bb63f838ff92eeac142aae944e9f678df13c9.jpg`,
      artist: 'Swørn',
      id: uuidv4(),
      audio: `${baseAudioUrl}/10310`,
      color: ['#365663', '#CAB0C9'],
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        `${baseCoverUrl}/6799/squareef95e219a44869318b7806e9f0f794a1f9c451e4.jpg`,
      artist: 'Aiguille',
      audio: `${baseAudioUrl}/9148`,
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        `${baseCoverUrl}/6816/squareff35dede32321a8aa0953809812941bcf8a6bd35.jpg`,
      artist: 'Swørn',
      audio: `${baseAudioUrl}/9228`,
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Far Away',
      cover:
        `${baseCoverUrl}/688/squarebc9a7af2ad67de703541c2c7a91e3df74ab494c0.jpg`,
      artist: 'Swørn',
      id: uuidv4(),
      audio: `${baseAudioUrl}/7951`,
      color: ['#da8489', '#3e3550'],
      active: false,
    },
    {
      name: 'Pick Me Up',
      cover:
        `${baseCoverUrl}/5847/square260a909fca701bbb7593f5f8f9cff9508cca2856.jpg`,
      artist: 'Aso, Middle School, Aviino',
      id: uuidv4(),
      audio: `${baseAudioUrl}/7949`,
      color: ['#d84c57', '#4db9c6'],
      active: false,
    },
  ];
}

export default chillHop;
