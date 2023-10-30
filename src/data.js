// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/Header.js', name: 'home' },
  { href: '/About.js', name: 'sobre' },
  { href: '/Menu.js', name: 'menu' },
  { href: '/Team.js', name: 'equipe' },
  { href: '/#testimonial', name: 'opiniões' },
  { href: '/Reservation.js', name: 'fazer uma reserva' },
  { href: '/Socials.js', name: 'contato' },
];

export const heroData = {
  pretitle: 'Uma pequena padaria de ',
  title: 'Cookies',
  subtitle:
    'Tudo que você espera encontrar em uma padoca e uma confeitaria "cool", está aqui.',
  btnText: 'Saiba mais',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'Nossa história',
  title: 'Quem somos nós',
  subtitle:
    'Duas amigas apaixonadas por receitas de cookies, brownies e outros docinhos, começaram a experimentar com ingredientes importados e preparo artesanal, para obterem mais sabor e qualidade. Depois de três anos praticando o hobby, as duas decidiram abrir o próprio negócio, tendo em mente um local aconchegante, rústico e moderno ao mesmo tempo. O nome ®PADUKIM é a junção de Panda, Duda e Kim.',
  btnText: 'Descubra mais',
  image: AboutImg,
};

export const menuData = {
  title: 'O sabor do outono',
  subtitle: 'veja o que temos pra hoje',
  modelImg: ModelWhiteImg,
  btnText: 'ver menu completo',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Cookie Múmia',
      price: 'R$14,50',
      description: 'Delicioso cookie bem "chocolatudo".',
    },
    {
      image: MenuImg2,
      name: 'Spooky Cookie',
      price: 'R$12,30',
      description: 'Morcego, abóbora e fantasma. Coberto com glacê de baunilha.',
    },
    {
      image: MenuImg3,
      name: 'O de sempre',
      price: 'R$8,50',
      description: 'Cookie com gotas de chocolate',
    },
    {
      image: MenuImg4,
      name: 'Bendita Nata',
      price: 'R$2,30',
      description: 'Bolachinha (ou bixcoito) de nata com recheio de frutas vermelhas e chocolate.',
    },
  ],
};

export const teamData = {
  pretitle: 'Nossa equipe',
  title: 'Conheça nossa chef',
  sub1: 'Agatha sempre foi apaixonada por petiscos luxuosos, especialmente cookies. Um dia, amassar pãezinhos deixou de ser um hobby e Agatha Gata decidiu seguir sua carreira como chef.',
  sub2: 'Inicialmente tivemos uma barreira de idiomas com a felina, mas as peças se encaixaram perfeitamente quando a chef começou a dominar nossa cozinha.',
  name: 'Agatha Gata',
  occupation: 'Chef executiva',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "o quê nossos clientes dizem ",
  subtitle: '+ de 600 clientes satisfeitos',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Miau miau miaaaau miAaAauuUUuuUu miau miau miau miau. Miau miau miAAAAAAAAuuuu. Miau miau miau, miau, miau miau.',
      image: Avatar1,
      name: 'Alan Botas',
      occupation: 'CEO da OrasBolos',
    },
    {
      message:
        'Prrrrrrrrrr prrrr... Prrr PRRRR prrr, prrr prrr miauprrrrrr, prrr, prrr, prrrrrrr PRRRRR, prrr.',
      image: Avatar2,
      name: 'Clara Tulipas',
      occupation: 'Embaixadora da Sabor Morango',
    },
    {
      message:
        'Eu gosto muito de gatos, os cookies são ótimos, mas pra ser sincera eu venho aqui só pra ver os gatos.',
      image: Avatar3,
      name: 'Taylor Smith',
      occupation: 'Cantora',
    },
  ],
};

export const reservationData = {
  title: 'reserva',
  subtitle:
    'Ligue para (14) 91234-5678 das 05:40AM - 11:00PM, de quarta à domingo, ou agende online em OpenTable.Reservations (Exigido para reservas de 6 pessoas ou mais).',
  modelImg: ModelBlackImg,
  btnText: 'faça uma reserva',
};

export const newsletterData = {
  title: 'assine nossa newsletter',
  subtitle: 'Receba nossas novidades em seu email.',
  placeholder: 'Inscreva-se para conhecer docinhos.',
  btnText: 'Me inscrever agora',
};

export const footerData = {
  contact: {
    title: 'contato e localização',
    address: 'Avenida Cheirinho de Lavanda N°06, Centro - Brotas 1780-000',
    phone: '(14) 91234-5678',
  },
  hours: {
    title: 'horário de funcionamento',
    program: [
      {
        days: 'quarta - domingo',
        hours: '05:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'redes sociais',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
