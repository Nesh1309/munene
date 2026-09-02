type TTabsTitle = {
    [key: string]: string | number;
};

type TDashboardTabIndex = {
    [key: string]: number;
};

export const tabs_title: TTabsTitle = Object.freeze({
    WORKSPACE: 'Workspace',
    CHART: 'Chart',
});

export const DBOT_TABS: TDashboardTabIndex = Object.freeze({
    DASHBOARD: 0,
    BOT_BUILDER: 1,
    CHART: 2,
    TRADING_BOTS: 3,
    ANALYSIS_TOOLS: 4,
    DTRADER: 5,
    COPY_TRADING: 6,
    TRADING_VIEW: 7,
    RISK_CALCULATOR: 8,
    TUTORIAL: 9,
});

export const MAX_STRATEGIES = 10;

export const TAB_IDS = [
    'id-dbot-dashboard',
    'id-bot-builder',
    'id-charts',
    'id-trading-bots',
    'id-analysis-tools',
    'id-dtrader',
    'id-copy-trading',
    'id-trading-view',
    'id-risk-calculator',
    'id-tutorials',
];

export const DEBOUNCE_INTERVAL_TIME = 500;
