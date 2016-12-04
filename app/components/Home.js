// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StarFull from 'material-ui/svg-icons/toggle/star';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    'margin-top': '10px',
    'margin-bottom': '10px'
  },
  img: {
    width: '100%'
  }
};

const tilesData = [
  {
    url: 'http://www.mangareader.net/naruto',
    img: 'http://s3.mangareader.net/cover/naruto/naruto-l0.jpg',
    title: 'Naruto',
    lastChapter: 'Naruto 700',
  },
  {
    url: 'http://www.mangareader.net/naruto-gaiden-the-seventh-hokage',
    img: 'http://s5.mangareader.net/cover/naruto-gaiden-the-seventh-hokage/naruto-gaiden-the-seventh-hokage-l0.jpg',
    title: 'Naruto Gaiden: The Seventh Hokage',
    lastChapter: 'Naruto Gaiden: The Seventh Hokage 10',
  },
  {
    url: 'http://www.mangareader.net/bleach',
    img: 'http://s3.mangareader.net/cover/bleach/bleach-l0.jpg',
    title: 'Bleach',
    lastChapter: 'Bleach 686',
  },
  {
    url: 'http://www.mangareader.net/fairy-tail',
    img: 'http://s4.mangareader.net/cover/fairy-tail/fairy-tail-l0.jpg',
    title: 'Fairy Tail',
    lastChapter: 'Fairy Tail 511',
  },
  {
    url: 'http://www.mangareader.net/one-piece',
    img: 'http://s3.mangareader.net/cover/one-piece/one-piece-l1.jpg',
    title: 'One Piece',
    lastChapter: 'One Piece 847',
  },
  {
    url: 'http://www.mangareader.net/shingeki-no-kyojin',
    img: 'http://s1.mangareader.net/cover/shingeki-no-kyojin/shingeki-no-kyojin-l0.jpg',
    title: 'Shingeki no Kyojin',
    lastChapter: 'Shingeki no Kyojin 87',
  },
  {
    url: 'http://www.mangareader.net/dengeki-daisy',
    img: 'http://s5.mangareader.net/cover/dengeki-daisy/dengeki-daisy-l0.jpg',
    title: 'Dengeki Daisy',
    lastChapter: 'Dengeki Daisy 75',
  },
  {
    url: 'http://www.mangareader.net/hunter-x-hunter',
    img: 'http://s1.mangareader.net/cover/hunter-x-hunter/hunter-x-hunter-l0.jpg',
    title: 'Hunter X Hunter',
    lastChapter: 'Hunter X Hunter 360',
  },
  {
    url: 'http://www.mangareader.net/the-breaker-new-waves',
    img: 'http://s1.mangareader.net/cover/the-breaker-new-waves/the-breaker-new-waves-l0.jpg',
    title: 'The Breaker: New Waves',
    lastChapter: 'The Breaker: New Waves 201',
  },
  {
    url: 'http://www.mangareader.net/toriko',
    img: 'http://s5.mangareader.net/cover/toriko/toriko-l0.jpg',
    title: 'Toriko',
    lastChapter: 'Toriko 396',
  },
  {
    url: 'http://www.mangareader.net/fairy-tail-zero',
    img: 'http://s2.mangareader.net/cover/fairy-tail-zero/fairy-tail-zero-l0.jpg',
    title: 'Fairy Tail Zero',
    lastChapter: 'Fairy Tail Zero 13',
  },
  {
    url: 'http://www.mangareader.net/nisekoi',
    img: 'http://s2.mangareader.net/cover/nisekoi/nisekoi-l0.jpg',
    title: 'Nisekoi',
    lastChapter: 'Nisekoi 229',
  },
  {
    url: 'http://www.mangareader.net/ao-no-exorcist',
    img: 'http://s5.mangareader.net/cover/ao-no-exorcist/ao-no-exorcist-l0.jpg',
    title: 'Ao No Exorcist',
    lastChapter: 'Ao No Exorcist 84',
  },
  {
    url: 'http://www.mangareader.net/nanatsu-no-taizai',
    img: 'http://s3.mangareader.net/cover/nanatsu-no-taizai/nanatsu-no-taizai-l0.jpg',
    title: 'Nanatsu no Taizai',
    lastChapter: 'Nanatsu no Taizai 201',
  },
  {
    url: 'http://www.mangareader.net/akame-ga-kiru',
    img: 'http://s1.mangareader.net/cover/akame-ga-kiru/akame-ga-kiru-l0.jpg',
    title: 'Akame ga Kiru!',
    lastChapter: 'Akame ga Kiru! 76',
  },
  {
    url: 'http://www.mangareader.net/freezing',
    img: 'http://s2.mangareader.net/cover/freezing/freezing-l0.jpg',
    title: 'Freezing',
    lastChapter: 'Freezing 207',
  },
  {
    url: 'http://www.mangareader.net/gintama',
    img: 'http://s4.mangareader.net/cover/gintama/gintama-l0.jpg',
    title: 'Gintama',
    lastChapter: 'Gintama 614',
  },
  {
    url: 'http://www.mangareader.net/assassination-classroom',
    img: 'http://s1.mangareader.net/cover/assassination-classroom/assassination-classroom-l0.jpg',
    title: 'Assassination Classroom',
    lastChapter: 'Assassination Classroom 180',
  },
];

export default class Home extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={6}
          cellHeight={250}
          padding={20}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>{tile.lastChapter}</span>}
              actionIcon={<IconButton>
                { Math.random() < 0.7 ? <StarBorder color="white" /> : <StarFull color="white" /> }
              </IconButton>}
              containerElement={<Link to="view"></Link>}
            >
              <img alt={tile.title} src={tile.img} style={styles.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
