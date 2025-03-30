// import React from 'react'

// function HelpArticles() {
//   return (
//     <div>
//       HelpArticles
//     </div>
//   )
// }

// export default HelpArticles

































import React, { useState } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function HelpArticles() {
  const [wikiData] = useState([
    {
      id: 1,
      title: 'Python',
      articleCount: 4
    },
    {
      id: 2,
      title: 'Django',
      articleCount: 15
    },
    {
      id: 3,
      title: 'FASTAPI',
      articleCount: 1
    },
    {
      id: 4,
      title: 'Django REST',
      articleCount: 4
    },
    {
      id: 5,
      title: 'WEB',
      articleCount: 2
    },
    {
      id: 6,
      title: 'GIT',
      articleCount: 3
    },
    {
      id: 7,
      title: 'Templates',
      articleCount: 0
    },
    {
      id: 8,
      title: 'Docker',
      articleCount: 1
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWiki, setFilteredWiki] = useState(wikiData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredWiki(wikiData);
    } else {
      const filtered = wikiData.filter(wiki => 
        wiki.title.toLowerCase().includes(query)
      );
      setFilteredWiki(filtered);
    }
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      backgroundColor: '#f8f9fa', 
      minHeight: 'calc(100vh - 64px)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          margin: '0 0 30px 0', 
          fontSize: '24px', 
          fontWeight: '500',
          color: '#333'
        }}>
          How can we help?
        </h2>

        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto 40px',
          position: 'relative'
        }}>
            <div style={{display: 'flex', flexDirection: 'row' }}>
            <div>
                <SearchIcon style={{ color: '#666', marginRight: '8px', height: '45px' }} />
            </div>               
          <TextField
            size="small"
            value={searchQuery}
            onChange={handleSearch}
            fullWidth
            placeholder="Search your question"
            variant="outlined"
            
            // InputProps={{
            //   startAdornment: <SearchIcon style={{ color: '#666', marginRight: '8px' }} />,
            // }}
            sx={{
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
              },
            }}
          />
          </div>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '0 20px'
        }}>
          {filteredWiki.map((wiki) => (
            <div 
              key={wiki.id}
              style={{ 
                padding: '24px',
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'center',
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '16px', 
                color: '#1976d2',
                fontWeight: '500'
              }}>
                {wiki.title}
              </h3>
              <p style={{ 
                margin: 0, 
                color: '#666', 
                fontSize: '14px'
              }}>
                {wiki.articleCount} article{wiki.articleCount !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpArticles