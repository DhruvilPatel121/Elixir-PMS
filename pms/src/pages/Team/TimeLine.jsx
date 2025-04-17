// import React from 'react';
// import { Box, Paper, Typography } from '@mui/material';

// const Timeline = () => {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper sx={{ p: 3, borderRadius: 2 }}>
//         <Typography variant="h6">Timeline</Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Timeline







































import React, { useState } from 'react';
import { 
  Avatar, 
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReplyIcon from '@mui/icons-material/Reply';
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from '../../components/Button/CustomButton';

const Timeline = () => {
  const [newPost, setNewPost] = useState('');
  const [showReplyInput, setShowReplyInput] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);


  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Manav Parmar',
        role: 'Software Developer',
        avatar: '/avatars/manav.jpg'
      },
      content: 'me too',
      date: '13/12/2022',
      time: '02:15 PM',
      },
        {
          id: 2,
          user: {
            name: 'Yajam Pandya',
            role: 'Software Engineer',
            avatar: '/avatars/yajam.jpg'
          },
          content: 'I am also in it',
          date: '13/12/2022',
          time: '02:30 PM'
        },
        {
          id: 3,
          user: {
            name: 'Tejas Sanghani',
            role: 'Developer',
            avatar: '/avatars/tejas.jpg'
          },
          content: 'Count me in!',
          date: '13/12/2022',
          time: '02:35 PM'
        },
        {
          id: 4,
          user: {
            name: 'Hardik Sabhaya',
            role: 'Software Engineer',
            avatar: '/avatars/hardik.jpg'
          },
          content: 'Me too!!!',
          date: '13/12/2022',
          time: '02:40 PM'
        },
        {
          id: 5,
          user: {
            name: 'Tejas Sanghani',
            role: 'Developer',
            avatar: '/avatars/tejas.jpg'
          },
          content: 'Count me in!',
          date: '13/12/2022',
          time: '02:35 PM'
        },
        {
          id: 6,
          user: {
            name: 'Hardik Sabhaya',
            role: 'Software Engineer',
            avatar: '/avatars/hardik.jpg'
          },
          content: 'Me too!!!',
          date: '13/12/2022',
          time: '02:40 PM'
        },
        {
          id: 7,
          user: {
            name: 'Tejas Sanghani',
            role: 'Developer',
            avatar: '/avatars/tejas.jpg'
          },
          content: 'Count me in!',
          date: '13/12/2022',
          time: '02:35 PM'
        },
        {
          id: 8,
          user: {
            name: 'Hardik Sabhaya',
            role: 'Software Engineer',
            avatar: '/avatars/hardik.jpg'
          },
          content: 'Me too!!!',
          date: '13/12/2022',
          time: '02:40 PM'
        },
        {
          id: 9,
          user: {
            name: 'Tejas Sanghani',
            role: 'Developer',
            avatar: '/avatars/tejas.jpg'
          },
          content: 'Count me in!',
          date: '13/12/2022',
          time: '02:35 PM'
        },
  ]);

const teamMembers = [
  { name: 'Akash Mangroliya', role: 'Admin', avatar: '/avatars/akash.jpg' },
  { name: 'Apeksha Trivedi', role: 'HR Executive', avatar: '/avatars/apeksha.jpg' },
  { name: 'Ayush Patel', role: 'ReactJS Intern', avatar: '/avatars/ayush.jpg' },
  { name: 'Bharat Ahuja', role: 'QA', avatar: '/avatars/bharat.jpg' },
  { name: 'Dhruv Hingol', role: 'Software Engineer', avatar: '/avatars/dhruv.jpg' },
  { name: 'Drashti Vasoya', role: 'Software Engineer', avatar: '/avatars/drashti.jpg' },
  { name: 'Hardik Kulkarni', role: 'Software Developer', avatar: '/avatars/hardik.jpg' },
  { name: 'Harsh Saliya', role: 'Software Developer', avatar: '/avatars/harsh.jpg' },
  { name: 'Harshil Vasoya', role: 'Team Lead', avatar: '/avatars/harshil.jpg' },
  { name: 'Hetvik Sabhaya', role: 'Senior Software Engineer', avatar: '/avatars/hetvik.jpg' },
  { name: 'Jatin Manvar', role: 'Software Engineer', avatar: '/avatars/jatin.jpg' },
  { name: 'Jinal Sojitra', role: 'Software Engineer', avatar: '/avatars/jinal.jpg' },
  { name: 'Jitendra Sanghani', role: 'CEO', avatar: '/avatars/jitendra.jpg' },
  { name: 'Meet Sheladiya', role: 'Software Engineer', avatar: '/avatars/meet.jpg' },
  { name: 'Meet Sabhaya', role: 'Software Engineer', avatar: '/avatars/meets.jpg' },
  { name: 'Milan Parmar', role: 'Senior Software Engineer', avatar: '/avatars/milan.jpg' }
];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim() && !selectedFile) return;

    const newPostObj = {
      id: Date.now(),
      user: {
        name: 'Current User',
        role: 'Current Role',
        avatar: '/avatars/current-user.jpg'
      },
      content: newPost,
      date: new Date().toLocaleDateString('en-GB'),
      time: new Date().toLocaleTimeString(),
      file: selectedFile,
      replyTo: showReplyInput
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
    setSelectedFile(null);
    setShowReplyInput(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <div style={{ 
      display: 'flex',
      height: 'calc(100vh - 64px)',
      backgroundColor: '#f5f7fb',
      overflow: 'hidden'
    }}>
      {/* Main content area */}
      <div style={{ 
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Post input box */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Avatar sx={{ width: 40, height: 40 }} />
            <div style={{ flex: 1 }}>
              <TextField
                fullWidth
                multiline
                placeholder="Share an idea or documents..."
                variant="outlined"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff'
                  }
                }}
              />
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginTop: '8px' 
              }}>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload">
                  {/* <Button
                    component="span"
                    startIcon={<AttachFileIcon />}
                    sx={{ color: '#666' }}
                  >
                    Upload File
                  </Button> */}

                  <CustomButton
                  variant="text"
                  component="span"
                  startIcon={<AttachFileIcon />}
                  sx={{ color: '#666' }}
                  >
                    Upload File
                  </CustomButton>
                </label>
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePostSubmit}
                  sx={{ borderRadius: '4px' }}
                >
                  Post
                </Button> */}

                <CustomButton
                  variant="contained"
                  onClick={handlePostSubmit}
                >
                  Post
                </CustomButton> 
              </div>
            </div>
          </div>
        </div>

        {/* Posts grid section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          paddingBottom: '20px'
        }}>
          {posts.map((post, index) => (
            <div key={post.id} style={{
              position: 'relative',
              marginTop: (index % 2 === 1 ? '30px' : '0')
            }}>

              {/* Date Badge - Alternating position */}
              <div style={{
                position: 'absolute',
                top: 0,
                ...(index % 2 === 0 ? { right: 0 } : { left: 0 }),
                backgroundColor: '#4285f4',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '13px',
                fontWeight: '500',
                zIndex: 1
              }}>
                {post.date}
              </div>

              {/* Post Card */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e0e0e0',
                marginTop: '35px'
              }}>
                <div style={{ padding: '16px' }}>
                  
                  {/* User Info */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}>
                    <Avatar 
                      src={post.user.avatar} 
                      sx={{ width: 40, height: 40 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#333'
                      }}>
                        {post.user.name}
                      </div>
                      <div style={{ 
                        color: '#666',
                        fontSize: '12px'
                      }}>
                        {post.time}
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div style={{ 
                    marginTop: '12px',
                    fontSize: '14px',
                    color: '#333',
                    lineHeight: '1.5'
                  }}>
                    {post.content}
                  </div>

                  {/* Post Actions */}
                  <div style={{ 
                    marginTop: '16px',
                    display: 'flex',
                    gap: '16px',
                    borderTop: '1px solid #f0f0f0',
                    paddingTop: '12px'
                  }}>
                    {/* <Button
                      size="small"
                      startIcon={<ReplyIcon sx={{ fontSize: 16 }} />}
                      sx={{ 
                        color: '#666',
                        textTransform: 'none',
                        fontSize: '13px',
                        padding: '4px 8px',
                        minWidth: 'auto'
                      }}
                      onClick={() => setShowReplyInput(post.id)}
                    >
                      Reply
                    </Button>
                    <Button
                      size="small"
                      startIcon={<VisibilityIcon sx={{ fontSize: 16 }} />}
                      sx={{ 
                        color: '#666',
                        textTransform: 'none',
                        fontSize: '13px',
                        padding: '4px 8px',
                        minWidth: 'auto'
                      }}
                    >
                      View 1 Reply
                    </Button> */}

                    <CustomButton
                    variant="text"
                    size="small"
                    startIcon={<ReplyIcon sx={{ fontSize: 16 }} />}
                    onClick={() => setShowReplyInput(post.id)}
                    sx={{ 
                        color: '#666',
                        textTransform: 'none',
                        fontSize: '13px',
                        padding: '4px 8px',
                        minWidth: 'auto'
                      }}
                    >
                      Reply
                    </CustomButton>
                    <CustomButton
                    variant="text"
                    size="small"
                    startIcon={<VisibilityIcon sx={{ fontSize: 16 }} />}
                    onClick={() => setShowReplyInput(post.id)}
                    sx={{ 
                        color: '#666',
                        textTransform: 'none',
                        fontSize: '13px',
                        padding: '4px 8px',
                        minWidth: 'auto'
                      }}
                    >
                       View 1 Reply
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right sidebar - Team members */}
      <div style={{
        width: '280px',
        backgroundColor: '#fff',
        borderLeft: '1px solid #e0e0e0',
        padding: '16px',
        overflowY: 'auto',
        height: '100%',
        position: 'sticky',
        top: 0
      }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <Avatar 
              src={member.avatar} 
              sx={{ width: 32, height: 32 }}
            />
            <div style={{ marginLeft: '12px', flex: 1 }}>
              <div style={{ 
                fontWeight: 500, 
                fontSize: '14px',
                color: '#333'
              }}>
                {member.name}
              </div>
              <div style={{ 
                color: '#666', 
                fontSize: '12px'
              }}>
                {member.role}
              </div>
            </div>
            <IconButton 
              size="small"
              sx={{ 
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              <EmailIcon fontSize="small" sx={{ color: '#666' }} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline