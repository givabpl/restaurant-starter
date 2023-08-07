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
  { href: '/', name: 'home' },
  { href: '/', name: 'sobre' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'equipe' },
  { href: '/', name: 'opiniões' },
  { href: '/', name: 'fazer uma reserva' },
  { href: '/', name: 'contato' },
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
    'Duas amigas apaixonadas por receitas de cookies, brownies e outros docinhos, começaram a experimentar com ingredientes importados e preparo artesanal, para obterem mais sabor e qualidade. <br>Depois de três anos praticando o hobbie, as duas decidiram abrir o próprio negócio, tendo em mente um local aconchegante, rústico e moderno ao mesmo tempo. <br>O nome ®PADUKIM é a junção de Panda, Duda e Kim.',
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
      description: 'Delicioso cookie bem "chocolatudo" coberto com glacê de baunilha.',
    },
    {
      image: MenuImg2,
      name: 'Spooky Cookie',
      price: 'R$12,30',
      description: 'Cookie disponível em três formatos: morcego, abóbora e fantasma. Coberto com glacê de baunilha.',
    },
    {
      image: MenuImg3,
      name: 'O de sempre',
      price: 'R$8.50',
      description: 'Cookie clássico com gotas de chocolate',
    },
    {
      image: MenuImg4,
      name: 'Bendita Nata',
      price: 'R$2,30',
      description: 'Bolachinha (ou bixcoito) de nata, levemente coberta por glacê de baunilha, com recheio de frutas vermelhas e base de chocolate meio amargo',
    },
  ],
};

export const teamData = {
  pretitle: 'Nossa equipe',
  title: 'Conheça nosso chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'Agatha Martins',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Alan Botas',
      occupation: 'CEO da OrasBolos',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'Clara Tulipas',
      occupation: 'Embaixadora da Sabor Morango',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Taylor Smith',
      occupation: 'Cantora',
    },
  ],
};

export const reservationData = {
  title: 'reserva',
  subtitle:
    'Liguec para (14) 91234-5678 das 05:40AM - 11:00PM, de quarta à domingo, ou agende online em OpenTable.Reservations (Exigido para reservas de 6 pessoas ou mais).',
  modelImg: ModelBlackImg,
  btnText: 'faça uma reserva',
};

export const newsletterData = {
  title: 'assine nossa newsletter',
  subtitle: 'Receba nossas novidades em seu email.',
  placeholder: 'Inscreva-se para conhecer doces deliciosos.',
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
