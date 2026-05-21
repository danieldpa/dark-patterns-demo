import { useMemo, useState } from 'react'
import './App.css'

function createIcon(paths) {
  return function Icon({ size = 24, className = '' }) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths}
      </svg>
    )
  }
}

const AlertTriangle = createIcon(
  <>
    <path d="M12 3 2 21h20L12 3Z" />
    <path d="M12 9v5" />
    <path d="M12 17h.01" />
  </>,
)

const CheckCircle2 = createIcon(
  <>
    <path d="M9 12l2 2 4-5" />
    <path d="M21 12a9 9 0 1 1-6.2-8.56" />
  </>,
)

const Cookie = createIcon(
  <>
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4 4 4 0 0 1-2-2" />
    <path d="M8.5 8.5h.01" />
    <path d="M16 15.5h.01" />
    <path d="M12 12h.01" />
    <path d="M7 14h.01" />
  </>,
)

const CreditCard = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
    <path d="M7 15h4" />
  </>,
)

const FileText = createIcon(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h6" />
  </>,
)

const Gavel = createIcon(
  <>
    <path d="m14 13-7 7" />
    <path d="m8 6 10 10" />
    <path d="m6 8 4-4 10 10-4 4Z" />
    <path d="M3 21h8" />
  </>,
)

const Home = createIcon(
  <>
    <path d="m3 10 9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-6h6v6" />
  </>,
)

const MousePointerClick = createIcon(
  <>
    <path d="m5 3 9 18 2-7 6-2Z" />
    <path d="M13 13 20 6" />
    <path d="M9 1v3" />
    <path d="M1 9h3" />
  </>,
)

const ShieldAlert = createIcon(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </>,
)

const ShoppingCart = createIcon(
  <>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
  </>,
)

const XCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </>,
)

const screens = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'cookies', label: 'Cookies', icon: Cookie },
  { id: 'compra', label: 'Compra', icon: ShoppingCart },
  { id: 'cancelamento', label: 'Cancelamento', icon: XCircle },
  { id: 'contrato', label: 'Li e Aceito', icon: FileText },
  { id: 'juridico', label: 'Analise Juridica', icon: Gavel },
]

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function NavButton({ item, active, onClick }) {
  const Icon = item.icon
  return (
    <button
      type="button"
      onClick={onClick}
      className={`nav-button ${active ? 'active' : ''}`}
    >
      <Icon size={18} />
      <span>{item.label}</span>
    </button>
  )
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

function ChoiceButton({ children, variant = 'primary', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`choice-button ${variant}`}
    >
      {children}
    </button>
  )
}

function HomeScreen({ setScreen }) {
  return (
    <div className="screen-grid home-grid">
      <Card>
        <Badge>Experimento de sala</Badge>
        <h1>Dark Patterns e o "Li e Aceito"</h1>
        <p className="lead">
          Este site simula interfaces que parecem oferecer escolha, mas conduzem o usuario para uma decisao ja desejada pela plataforma.
        </p>
        <div className="question-box">
          <p>Pergunta central:</p>
          <p>
            O clique em "aceito" representa uma vontade livre ou apenas o resultado de uma interface manipulada?
          </p>
        </div>
        <div className="button-row">
          <ChoiceButton onClick={() => setScreen('cookies')}>Comecar simulacao</ChoiceButton>
          <ChoiceButton variant="secondary" onClick={() => setScreen('juridico')}>Ver analise juridica</ChoiceButton>
        </div>
      </Card>

      <Card className="dark-card">
        <MousePointerClick className="card-icon" size={36} />
        <h2>Como usar em apresentacao</h2>
        <p>
          Mostre primeiro as telas sem explicar. Peca para a turma decidir. Depois revele onde estava a manipulacao.
        </p>
        <div className="steps">
          <p>1. A turma escolhe rapidamente.</p>
          <p>2. Voce mostra o padrao manipulativo.</p>
          <p>3. Voce conecta com vontade, informacao e boa-fe.</p>
        </div>
      </Card>
    </div>
  )
}

function CookiesScreen({ setScreen }) {
  const [reveal, setReveal] = useState(false)

  return (
    <div className="screen-grid two-column">
      <Card>
        <Badge>Simulacao 1</Badge>
        <h2>Tela de cookies</h2>
        <p className="muted">Escolha uma opcao como se estivesse acessando um site real.</p>

        <div className="simulation-box">
          <Cookie className="simulation-icon" size={34} />
          <h3>Queremos melhorar sua experiencia</h3>
          <p>
            Usamos cookies para personalizar conteudo, anuncios e analisar trafego. Ao continuar, voce concorda com nossos termos.
          </p>
          <div className="button-row">
            <ChoiceButton onClick={() => setReveal(true)}>Aceitar e continuar</ChoiceButton>
            <ChoiceButton variant="hidden" onClick={() => setReveal(true)}>configurar opcoes</ChoiceButton>
          </div>
        </div>
      </Card>

      <Card>
        <h3>O que observar</h3>
        {!reveal ? (
          <p className="muted">Clique em uma das opcoes para revelar a analise.</p>
        ) : (
          <Reveal>
            <div className="warning-box">
              <AlertTriangle size={20} />
              <div>
                <p>Dark pattern: hierarquia visual manipulada</p>
                <span>O botao de aceitar e grande e destacado. A opcao de configurar aparece como texto pequeno e pouco visivel.</span>
              </div>
            </div>
            <p className="body-text">
              A escolha existe formalmente, mas a interface empurra o usuario para aceitar tudo. Isso fragiliza a ideia de consentimento livre e informado.
            </p>
            <ChoiceButton onClick={() => setScreen('compra')}>Proxima simulacao</ChoiceButton>
          </Reveal>
        )}
      </Card>
    </div>
  )
}

function CompraScreen({ setScreen }) {
  const [step, setStep] = useState(1)
  const price = step === 1 ? 'R$ 49,90' : 'R$ 49,90 + taxa de servico R$ 12,90'

  return (
    <div className="screen-grid two-column">
      <Card>
        <Badge>Simulacao 2</Badge>
        <h2>Compra online</h2>
        <div className="checkout-box">
          <div className="checkout-heading">
            <div>
              <h3>Curso Premium UX</h3>
              <p>Acesso imediato por 7 dias.</p>
            </div>
            <CreditCard size={34} />
          </div>

          <div className="price-box">
            <p>Total apresentado</p>
            <strong>{price}</strong>
            {step > 1 && <span>Renovacao automatica: R$ 89,90/mes apos o periodo inicial.</span>}
          </div>

          {step === 1 ? (
            <div className="button-row">
              <ChoiceButton onClick={() => setStep(2)}>Continuar</ChoiceButton>
            </div>
          ) : (
            <div className="stack">
              <label className="checkbox-row">
                <input type="checkbox" defaultChecked />
                <span>Aceito receber ofertas, compartilhar dados com parceiros e renovar automaticamente.</span>
              </label>
              <div className="button-row">
                <ChoiceButton onClick={() => setStep(3)}>Finalizar compra</ChoiceButton>
                <ChoiceButton variant="hidden" onClick={() => setStep(3)}>remover opcoes adicionais</ChoiceButton>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Card>
        <h3>Analise</h3>
        {step < 3 ? (
          <p className="muted">Avance a simulacao para revelar os problemas.</p>
        ) : (
          <Reveal>
            <div className="warning-box list-box">
              <div>
                <p>Dark patterns encontrados</p>
                <ul>
                  <li>Preco real aparece apenas no fim.</li>
                  <li>Checkbox vem pre-marcado.</li>
                  <li>Renovacao automatica fica pouco destacada.</li>
                  <li>Remover opcoes adicionais e menos visivel que finalizar.</li>
                </ul>
              </div>
            </div>
            <p className="body-text">
              A interface cria uma decisao cansativa e assimetrica: aceitar e facil, revisar e dificil.
            </p>
            <ChoiceButton onClick={() => setScreen('cancelamento')}>Ir para cancelamento</ChoiceButton>
          </Reveal>
        )}
      </Card>
    </div>
  )
}

function CancelamentoScreen({ setScreen }) {
  const [stage, setStage] = useState(1)
  const messages = {
    1: 'Tem certeza que deseja cancelar? Voce perdera todos os beneficios exclusivos.',
    2: 'Antes de sair, escolha um motivo. Sem isso nao conseguimos concluir.',
    3: 'Ultima chance: fique por mais 30 dias com desconto especial.',
  }

  return (
    <div className="screen-grid two-column">
      <Card>
        <Badge>Simulacao 3</Badge>
        <h2>Cancelamento dificil</h2>
        <div className="simulation-box">
          <ShieldAlert className="simulation-icon" size={34} />
          <h3>{messages[stage]}</h3>
          {stage === 2 && (
            <select className="select-field">
              <option>Selecione um motivo</option>
              <option>Muito caro</option>
              <option>Nao uso mais</option>
              <option>Outro</option>
            </select>
          )}
          <div className="button-row">
            <ChoiceButton onClick={() => setStage(Math.min(stage + 1, 3))}>Continuar assinatura</ChoiceButton>
            <ChoiceButton variant="danger" onClick={() => (stage < 3 ? setStage(stage + 1) : setScreen('contrato'))}>
              Sim, quero perder meus beneficios
            </ChoiceButton>
          </div>
        </div>
      </Card>

      <Card>
        <h3>O que isso demonstra</h3>
        <div className="stack body-text">
          <p>
            Contratar costuma ser rapido. Cancelar, porem, pode ser transformado em um caminho longo, emocional e confuso.
          </p>
          <div className="warning-box list-box">
            <div>
              <p>Dark pattern: obstrucao</p>
              <span>A plataforma cria barreiras para impedir ou atrasar uma decisao que deveria ser simples.</span>
            </div>
          </div>
          <ChoiceButton onClick={() => setScreen('contrato')}>Ir para "Li e Aceito"</ChoiceButton>
        </div>
      </Card>
    </div>
  )
}

function ContratoScreen({ setScreen }) {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="screen-grid two-column">
      <Card>
        <Badge>Simulacao 4</Badge>
        <h2>Contrato eletronico</h2>
        <div className="contract-box">
          <h3>Termos de uso</h3>
          <div className="terms-box">
            Ao prosseguir, voce declara que leu e concorda com todos os termos, incluindo politica de dados, renovacao automatica, compartilhamento com parceiros, alteracao unilateral de condicoes, limitacoes de responsabilidade, cobrancas futuras e demais disposicoes aplicaveis...
            <span>Clausula 18.3: informacoes adicionais podem ser usadas para fins comerciais conforme disponibilidade da plataforma...</span>
          </div>
          <p className="tiny">Role para ler tudo, mas o botao ja esta disponivel.</p>
          <div className="button-row">
            <ChoiceButton onClick={() => setAccepted(true)}>Li e aceito</ChoiceButton>
            <ChoiceButton variant="hidden" onClick={() => setAccepted(true)}>ler versao completa</ChoiceButton>
          </div>
        </div>
      </Card>

      <Card>
        <h3>Resultado</h3>
        {!accepted ? (
          <p className="muted">Clique em uma opcao para ver a analise.</p>
        ) : (
          <Reveal>
            <div className="danger-box">
              <p>Problema central</p>
              <span>O clique foi registrado, mas a interface dificultou a compreensao real do conteudo aceito.</span>
            </div>
            <p className="body-text">
              O "Li e Aceito" nao pode ser analisado sozinho. E preciso observar o contexto: clareza, acesso as clausulas, liberdade de recusa e ausencia de manipulacao.
            </p>
            <ChoiceButton onClick={() => setScreen('juridico')}>Ver conclusao juridica</ChoiceButton>
          </Reveal>
        )}
      </Card>
    </div>
  )
}

function JuridicoScreen() {
  const points = [
    { icon: CheckCircle2, title: 'Vontade livre', text: 'A decisao precisa ser tomada sem pressao, inducao ou obstaculo artificial.' },
    { icon: CheckCircle2, title: 'Informacao clara', text: 'O usuario precisa compreender pontos essenciais antes de aceitar.' },
    { icon: CheckCircle2, title: 'Boa-fe objetiva', text: 'A interface deve agir com transparencia, nao como armadilha visual.' },
  ]

  return (
    <div className="screen-grid law-grid">
      <Card className="dark-card">
        <Gavel className="card-icon" size={36} />
        <h2>Conclusao</h2>
        <p className="lead-dark">
          Dark patterns nao anulam automaticamente todo contrato, mas podem tornar questionavel a validade do consentimento.
        </p>
        <div className="quote-box">
          <p>Frase para apresentar:</p>
          <p>
            "O clique prova que houve interacao, mas nao prova sozinho que houve vontade livre, informada e consciente."
          </p>
        </div>
      </Card>

      <div className="points-grid">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <Card key={point.title}>
              <div className="point-row">
                <div className="point-icon"><Icon size={22} /></div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default function DarkPatternsDemo() {
  const [screen, setScreen] = useState('home')
  const current = useMemo(() => screens.find((item) => item.id === screen), [screen])

  return (
    <div className="app-shell">
      <div className="app-container">
        <header className="app-header">
          <div>
            <p>Trabalho de Legislacao em Informatica</p>
            <h1>Dark Patterns na pratica</h1>
          </div>
          <div className="current-screen">
            Tela atual: {current?.label}
          </div>
        </header>

        <div className="app-layout">
          <aside className="sidebar">
            {screens.map((item) => (
              <NavButton
                key={item.id}
                item={item}
                active={screen === item.id}
                onClick={() => setScreen(item.id)}
              />
            ))}
          </aside>

          <main>
            <Reveal key={screen}>
              {screen === 'home' && <HomeScreen setScreen={setScreen} />}
              {screen === 'cookies' && <CookiesScreen setScreen={setScreen} />}
              {screen === 'compra' && <CompraScreen setScreen={setScreen} />}
              {screen === 'cancelamento' && <CancelamentoScreen setScreen={setScreen} />}
              {screen === 'contrato' && <ContratoScreen setScreen={setScreen} />}
              {screen === 'juridico' && <JuridicoScreen />}
            </Reveal>
          </main>
        </div>
      </div>
    </div>
  )
}
