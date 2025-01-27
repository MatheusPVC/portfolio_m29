import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid totam
      aliquam recusandae aut, tempore quaerat molestias ipsa cumque assumenda
      vero cupiditate dolores vel dolorem consequuntur deserunt est corporis
      nemo animi.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MatheusPVC&show_icons=true&theme=merko&all_commits=true&locale=pt-br" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&theme=merko&layout=compact&custom_title=Tecnologias&langs_count=6" />
    </GithubSecao>
  </section>
)

export default Sobre
