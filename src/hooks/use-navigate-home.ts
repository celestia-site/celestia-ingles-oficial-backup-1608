import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigateHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHome = () => {
    if (location.pathname === '/') {
      // Se já estamos na homepage, apenas scroll para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se estamos em outra página, navegar para home
      navigate('/');
      // Usar timeout para garantir que a navegação aconteceu antes do scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return navigateToHome;
};