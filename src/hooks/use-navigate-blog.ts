import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigateBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToBlog = () => {
    if (location.pathname === '/blog') {
      // Se já estamos na página do blog, apenas scroll para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se estamos em outra página, navegar para blog
      navigate('/blog');
      // Usar timeout para garantir que a navegação aconteceu antes do scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return navigateToBlog;
};