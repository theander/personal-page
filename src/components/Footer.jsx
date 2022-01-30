import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {blue, green, grey, brown} from '@mui/material/colors';

const Footer = () => {
  return (
    <div className="footer">
      <p>Anderson Claudino ©</p>
      <a href=""><WhatsAppIcon sx={{color: green[800]}} /></a>
      <a href=""><FacebookIcon sx={{color: blue[600]}} /></a>
      <a href=""><GitHubIcon sx={{color: grey[900]}} /></a>
      <a href=""><InstagramIcon sx={{color: brown[900]}}/></a>
      <a href=""><LinkedInIcon sx={{color: blue[700]}}/></a>
    </div>)
}

export default Footer;
