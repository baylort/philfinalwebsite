function startGame() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Welcome to the Human Rights Enforcement Game! Choose a scenario to begin:</p>
            <div class="option" onclick="scenario1()">Refugee Crisis</div>
            <div class="option" onclick="scenario2()">Misinformation Crisis</div>
            <div class="option" onclick="scenario3()">Economic Inequality</div>
        </div>
    `;
}

// Refugee Crisis Scenario
function scenario1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Your country is facing a refugee crisis. Do you:</p>
            <div class="option" onclick="scenario1A()">Close the borders to maintain internal security</div>
            <div class="option" onclick="scenario1B()">Open the borders fully</div>
        </div>
    `;
}

function scenario1A() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Security measures have caused international outcry. How do you respond?</p>
            <div class="option" onclick="scenario1A1()">Ease some restrictions, allowing limited entry</div>
            <div class="option" onclick="scenario1A2()">Maintain strict controls</div>
        </div>
    `;
}

function scenario1A1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>International relief organizations offer assistance. Accept the offer?</p>
            <div class="option" onclick="finalStep('Accepting international aid, you manage to improve conditions but depend heavily on external support.')">Yes, accept help</div>
            <div class="option" onclick="finalStep('Declining aid, you maintain full control but struggle to provide adequate support.')">No, decline help</div>
        </div>
    `;
}

function scenario1A2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Refugees are struggling at the borders. Increase support without fully opening?</p>
            <div class="option" onclick="finalStep('By increasing support, you mitigate humanitarian concerns but increase national security risks.')">Yes, increase support</div>
            <div class="option" onclick="finalStep('Maintaining current measures, you keep security tight but humanitarian crises worsen.')">No, maintain measures</div>
        </div>
    `;
}

function scenario1B() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>The influx of refugees strains local resources. Implement strict residency requirements?</p>
            <div class="option" onclick="scenario1B1()">Yes, implement requirements</div>
            <div class="option" onclick="scenario1B2()">No, allow free movement</div>
        </div>
    `;
}

function scenario1B1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Residency requirements lead to unrest among refugees. Deploy additional security?</p>
            <div class="option" onclick="finalStep('Deploying security, you control unrest but face criticism for harsh measures.')">Yes, deploy security</div>
            <div class="option" onclick="finalStep('Choosing not to deploy, you avoid criticism but unrest and tensions escalate.')">No, do not deploy</div>
        </div>
    `;
}

function scenario1B2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Local communities complain about the lack of regulation. Increase community support programs?</p>
            <div class="option" onclick="finalStep('Increasing support programs aids integration but strains your budget considerably.')">Yes, increase programs</div>
            <div class="option" onclick="finalStep('Maintaining current policy, you conserve resources but social tensions rise.')">No, maintain policy</div>
        </div>
    `;
}


// Misinformation Crisis Scenario
function scenario2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>There is a significant rise in misinformation spreading through social media, causing public harm. As the leader, do you:</p>
            <div class="option" onclick="scenario2A()">Implement strict regulations on media content</div>
            <div class="option" onclick="scenario2B()">Allow information to flow freely</div>
        </div>
    `;
}

function scenario2A() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>These regulations are criticized as censorship. Do you:</p>
            <div class="option" onclick="scenario2A1()">Soften the regulations to allow more freedom of speech</div>
            <div class="option" onclick="scenario2A2()">Enforce them rigorously to control misinformation</div>
        </div>
    `;
}

function scenario2A1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Misinformation persists despite softened regulations. Increase public education on media literacy?</p>
            <div class="option" onclick="scenario2A1A()">Yes, increase education efforts</div>
            <div class="option" onclick="scenario2A1B()">No, consider alternative measures</div>
        </div>
    `;
}

function scenario2A1A() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Education efforts are costly and results are slow. Seek additional funding from international sources?</p>
            <div class="option" onclick="finalStep('Seeking funding enhances your educational campaigns but increases dependency on external funding.')">Yes, seek funding</div>
            <div class="option" onclick="finalStep('Avoiding external funding, you struggle with budget constraints but maintain financial independence.')">No, avoid funding</div>
        </div>
    `;
}

function scenario2A1B() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Alternative measures could involve collaboration with social media platforms. Initiate partnerships?</p>
            <div class="option" onclick="finalStep('Partnerships with platforms control misinformation effectively but raise concerns about corporate influence.')">Yes, initiate partnerships</div>
            <div class="option" onclick="finalStep('Avoiding partnerships, you keep corporate influence at bay but struggle with misinformation control.')">No, avoid partnerships</div>
        </div>
    `;
}

function scenario2A2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Strict regulations lead to backlash from free speech advocates. Continue with the strict policy?</p>
            <div class="option" onclick="finalStep('Continuing strict policies diminishes misinformation but harms public trust in your government.')">Yes, continue</div>
            <div class="option" onclick="finalStep('Reversing strict policies restores trust but allows misinformation to spread unchecked.')">No, reverse policy</div>
        </div>
    `;
}

function scenario2B() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Allowing free flow of information leads to harmful misinformation spikes. Strengthen community guidelines?</p>
            <div class="option" onclick="scenario2B1()">Yes, strengthen guidelines</div>
            <div class="option" onclick="scenario2B2()">No, keep current guidelines</div>
        </div>
    `;
}

function scenario2B1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Strengthened guidelines cause discontent among users claiming censorship. Increase transparency in content moderation?</p>
            <div class="option" onclick="finalStep('Increasing transparency improves user trust but complicates enforcement of guidelines.')">Yes, increase transparency</div>
            <div class="option" onclick="finalStep('Avoiding transparency, you maintain control over content but at the cost of user trust.')">No, maintain current transparency levels</div>
        </div>
    `;
}

function scenario2B2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Misinformation continues to spread unchecked. Explore technological solutions to automatically detect falsehoods?</p>
            <div class="option" onclick="finalStep('Implementing technological solutions helps reduce misinformation but raises privacy concerns.')">Yes, implement tech solutions</div>
            <div class="option" onclick="finalStep('Avoiding technological solutions, you preserve privacy but allow misinformation to proliferate.')">No, avoid tech solutions</div>
        </div>
    `;
}


// Economic Inequality Scenario
function scenario3() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Economic inequalities are growing in your country. To address this, do you:</p>
            <div class="option" onclick="scenario3A()">Enforce heavy taxes on the wealthy</div>
            <div class="option" onclick="scenario3B()">Implement minimal interference, letting market forces prevail</div>
        </div>
    `;
}

function scenario3A() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Business leaders are threatening to leave the country. Do you:</p>
            <div class="option" onclick="scenario3A1()">Negotiate tax breaks to keep businesses</div>
            <div class="option" onclick="scenario3A2()">Maintain tax levels to fund social programs</div>
        </div>
    `;
}

function scenario3A1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Negotiating tax breaks has calmed business leaders, but public outcry over inequality continues. Increase public spending on social welfare?</p>
            <div class="option" onclick="scenario3A1A()">Yes, increase spending</div>
            <div class="option" onclick="scenario3A1B()">No, stabilize budget</div>
        </div>
    `;
}

function scenario3A1A() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Increasing public spending has improved welfare but raised national debt. Seek international loans to support further investments?</p>
            <div class="option" onclick="finalStep('Securing international loans provides necessary funds but at the cost of increasing national debt and potential future dependency.')">Yes, seek loans</div>
            <div class="option" onclick="finalStep('Avoiding loans maintains fiscal independence but limits further enhancements in social welfare programs.')">No, avoid loans</div>
        </div>
    `;
}

function scenario3A1B() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Maintaining a stable budget has avoided debt, but social unrest over inequality grows. Initiate community development programs?</p>
            <div class="option" onclick="finalStep('Initiating community programs helps mitigate unrest and promotes equality, though it's a slow and resource-intensive process.')">Yes, initiate programs</div>
            <div class="option" onclick="finalStep('Choosing not to initiate programs saves resources but allows unrest and inequality to potentially worsen.')">No, do not initiate</div>
        </div>
    `;
}

function scenario3A2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Maintaining high tax levels funds social programs but causes some businesses to relocate. Attempt to attract new businesses with incentives?</p>
            <div class="option" onclick="finalStep('Offering incentives attracts new businesses, balancing the economy but at the risk of creating unsustainable tax breaks.')">Yes, offer incentives</div>
            <div class="option" onclick="finalStep('Not offering incentives preserves the tax base but may slow economic growth and job creation.')">No, do not offer</div>
        </div>
    `;
}

function scenario3B() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Allowing market forces to prevail has increased economic growth but widened the gap between rich and poor. Implement a universal basic income (UBI)?</p>
            <div class="option" onclick="scenario3B1()">Yes, implement UBI</div>
            <div class="option" onclick="scenario3B2()">No, continue current policies</div>
        </div>
    `;
}

function scenario3B1() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Implementing UBI has supported the poor but strained the national budget. Increase taxes to sustain the UBI program?</p>
            <div class="option" onclick="finalStep('Increasing taxes sustains UBI but risks economic slowdown as businesses and high-income individuals bear higher costs.')">Yes, increase taxes</div>
            <div class="option" onclick="finalStep('Not increasing taxes keeps the economic environment stable but jeopardizes the sustainability of the UBI program.')">No, do not increase</div>
        </div>
    `;
}

function scenario3B2() {
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = `
        <div class="question">
            <p>Economic growth continues but social inequality is still rising. Strengthen regulations on wages and labor conditions?</p>
            <div class="option" onclick="finalStep('Strengthening regulations improves working conditions and wages but may deter investment and job creation.')">Yes, strengthen regulations</div>
            <div class="option" onclick="finalStep('Avoiding new regulations maintains a favorable business climate but does little to directly address wage inequality and poor labor conditions.')">No, maintain status quo</div>
        </div>
    `;
}


function finalStep(conclusion) {
    const gameContainer = document.getElementById('game');
    let text = '';
    switch(conclusion) {
        case 'Accepting international aid, you manage to improve conditions but depend heavily on external support.':
            text = 'Accepting international aid, you manage to improve conditions but depend heavily on external support.';
            break;
        case 'Declining aid, you maintain full control but struggle to provide adequate support.':
            text = 'Declining aid, you maintain full control but struggle to provide adequate support.';
            break;
        case 'By increasing support, you mitigate humanitarian concerns but increase national security risks.':
            text = 'By increasing support, you mitigate humanitarian concerns but increase national security risks.';
            break;
        case 'Maintaining current measures, you keep security tight but humanitarian crises worsen.':
            text = 'Maintaining current measures, you keep security tight but humanitarian crises worsen.';
            break;
        case 'Deploying security, you control unrest but face criticism for harsh measures.':
            text = 'Deploying security, you control unrest but face criticism for harsh measures.';
            break;
        case 'Choosing not to deploy, you avoid criticism but unrest and tensions escalate.':
            text = 'Choosing not to deploy, you avoid criticism but unrest and tensions escalate.';
            break;
        case 'Increasing support programs aids integration but strains your budget considerably.':
            text = 'Increasing support programs aids integration but strains your budget considerably.';
            break;
        case 'Maintaining current policy, you conserve resources but social tensions rise.':
            text = 'Maintaining current policy, you conserve resources but social tensions rise.';
            break;
        case 'Seeking funding enhances your educational campaigns but increases dependency on external funding.':
            text = 'Seeking funding enhances your educational campaigns but increases dependency on external funding.';
            break;
        case 'Avoiding external funding, you struggle with budget constraints but maintain financial independence.':
            text = 'Avoiding external funding, you struggle with budget constraints but maintain financial independence.';
            break;
        case 'Partnerships with platforms control misinformation effectively but raise concerns about corporate influence.':
            text = 'Partnerships with platforms control misinformation effectively but raise concerns about corporate influence.';
            break;
        case 'Avoiding partnerships, you keep corporate influence at bay but struggle with misinformation control.':
            text = 'Avoiding partnerships, you keep corporate influence at bay but struggle with misinformation control.';
            break;
        case 'Continuing strict policies diminishes misinformation but harms public trust in your government.':
            text = 'Continuing strict policies diminishes misinformation but harms public trust in your government.';
            break;
        case 'Reversing strict policies restores trust but allows misinformation to spread unchecked.':
            text = 'Reversing strict policies restores trust but allows misinformation to spread unchecked.';
            break;
        case 'Increasing transparency improves user trust but complicates enforcement of guidelines.':
            text = 'Increasing transparency improves user trust but complicates enforcement of guidelines.';
            break;
        case 'Avoiding transparency, you maintain control over content but at the cost of user trust.':
            text = 'Avoiding transparency, you maintain control over content but at the cost of user trust.';
            break;
        case 'Implementing technological solutions helps reduce misinformation but raises privacy concerns.':
            text = 'Implementing technological solutions helps reduce misinformation but raises privacy concerns.';
            break;
        case 'Avoiding technological solutions, you preserve privacy but allow misinformation to proliferate.':
            text = 'Avoiding technological solutions, you preserve privacy but allow misinformation to proliferate.';
            break;
        case 'Securing international loans provides necessary funds but at the cost of increasing national debt and potential future dependency.':
            text = 'Securing international loans provides necessary funds but at the cost of increasing national debt and potential future dependency.';
            break;
        case 'Avoiding loans maintains fiscal independence but limits further enhancements in social welfare programs.':
            text = 'Avoiding loans maintains fiscal independence but limits further enhancements in social welfare programs.';
            break;
        case 'Offering incentives attracts new businesses, balancing the economy but at the risk of creating unsustainable tax breaks.':
            text = 'Offering incentives attracts new businesses, balancing the economy but at the risk of creating unsustainable tax breaks.';
            break;
        case 'Not offering incentives preserves the tax base but may slow economic growth and job creation.':
            text = 'Not offering incentives preserves the tax base but may slow economic growth and job creation.';
            break;
        case 'Increasing taxes sustains UBI but risks economic slowdown as businesses and high-income individuals bear higher costs.':
            text = 'Increasing taxes sustains UBI but risks economic slowdown as businesses and high-income individuals bear higher costs.';
            break;
        case 'Not increasing taxes keeps the economic environment stable but jeopardizes the sustainability of the UBI program.':
            text = 'Not increasing taxes keeps the economic environment stable but jeopardizes the sustainability of the UBI program.';
            break;
        case 'Strengthening regulations improves working conditions and wages but may deter investment and job creation.':
            text = 'Strengthening regulations improves working conditions and wages but may deter investment and job creation.';
            break;
        case 'Avoiding new regulations maintains a favorable business climate but does little to directly address wage inequality and poor labor conditions.':
            text = 'Avoiding new regulations maintains a favorable business climate but does little to directly address wage inequality and poor labor conditions.';
            break;
    }
    gameContainer.innerHTML = `<div class="question"><p>${text}</p></div>`;
}

