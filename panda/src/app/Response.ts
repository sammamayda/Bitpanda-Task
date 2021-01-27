
export interface Response {
    data: Data;
}

export interface Attributes {
    
    commodities: Commodity[];
    cryptocoins: Cryptocoin[];
    indexes: Index[];
    fiats: Fiat[];
   
}

export interface Data {
    type: string;
    attributes: Attributes;
}
export interface StartDate {
    date_iso8601: Date;
    unix: string;
}

export interface EndDate {
    date_iso8601: Date;
    unix: string;
}
export interface CommodityAttributes {
    symbol: string;
    name: string;
    sort: number;
    asset_type_name: string;
    asset_group_name: string;
    url_check_address: string;
    url_check_transaction: string;
    buy_active: boolean;
    sell_active: boolean;
    withdraw_active: boolean;
    deposit_active: boolean;
    transfer_active: boolean;
    available: boolean;
    maintenance_enabled: boolean;
    min_buy_eur: string;
    min_sell_eur: string;
    min_withdraw_eur: string;
    min_withdrawal: string;
    default_sell_amount: string;
    precision_for_fiat_price: number;
    precision_for_coins: number;
    precision_for_tx: number;
    precision_for_internal: number;
    wallet_min_deposit: string;
    wallet_small_deposit: string;
    wallet_small_deposit_fee: string;
    avg_price: string;
    color: string;
    wallet_withdraw_fee: string;
    change_24h: string;
    change_24h_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1m: string;
    change_1m_amount: string;
    change_1y: string;
    change_1y_amount: string;
    logo: string;
    logo_dark: string;
    support_destination_tag: boolean;
    support_destination_tag_type: boolean;
    circulating_supply: string;
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    measurement_unit: string;
    ieo_phases: any[];
    index_only: boolean;
    info: string;
    unavailable_reason: string;
    maintenance_reason: string;
    wallet_info: string;
    extra_info: string;
    investment_info: string;
    info_integration: string;
    description: string;
    info_deu: string;
    info_eng: string;
    info_fra: string;
    info_ita: string;
    info_pol: string;
    info_spa: string;
    info_tur: string;
    unavailable_reason_deu: string;
    unavailable_reason_eng: string;
    unavailable_reason_fra: string;
    unavailable_reason_ita: string;
    unavailable_reason_pol: string;
    unavailable_reason_spa: string;
    unavailable_reason_tur: string;
    maintenance_reason_deu: string;
    maintenance_reason_eng: string;
    maintenance_reason_fra: string;
    maintenance_reason_ita: string;
    maintenance_reason_pol: string;
    maintenance_reason_spa: string;
    maintenance_reason_tur: string;
    wallet_info_deu: string;
    wallet_info_eng: string;
    wallet_info_fra: string;
    wallet_info_ita: string;
    wallet_info_pol: string;
    wallet_info_spa: string;
    wallet_info_tur: string;
    extra_info_deu: string;
    extra_info_eng: string;
    extra_info_fra: string;
    extra_info_ita: string;
    extra_info_pol: string;
    extra_info_spa: string;
    extra_info_tur: string;
    investment_info_deu: string;
    investment_info_eng: string;
    investment_info_fra: string;
    investment_info_ita: string;
    investment_info_pol: string;
    investment_info_spa: string;
    investment_info_tur: string;
    info_integration_deu: string;
    info_integration_eng: string;
    info_integration_fra: string;
    info_integration_ita: string;
    info_integration_pol: string;
    info_integration_spa: string;
    info_integration_tur: string;
    description_deu: string;
    description_eng: string;
    description_fra: string;
    description_ita: string;
    description_pol: string;
    description_spa: string;
    description_tur: string;
}

export interface Commodity {
    type: string;
    attributes: CommodityAttributes;
    id: string;
}

export interface IeoPhasAttributes {
    name: string;
    phase_number: number;
    start_date: StartDate;
    end_date: EndDate;
    max_stock: string;
    price: string;
    active: boolean;
}

export interface IeoPhas {
    type: string;
    attributes: IeoPhasAttributes;
    id: string;
}

export interface CryptocoinAttributes {
    symbol: string;
    name: string;
    sort: number;
    asset_type_name: string;
    asset_group_name: string;
    url_check_address: string;
    url_check_transaction: string;
    buy_active: boolean;
    sell_active: boolean;
    withdraw_active: boolean;
    deposit_active: boolean;
    transfer_active: boolean;
    available: boolean;
    maintenance_enabled: boolean;
    min_buy_eur: string;
    min_sell_eur: string;
    min_withdraw_eur: string;
    min_withdrawal: string;
    default_sell_amount: string;
    precision_for_fiat_price: number;
    precision_for_coins: number;
    precision_for_tx: number;
    precision_for_internal: number;
    wallet_min_deposit: string;
    wallet_small_deposit: string;
    wallet_small_deposit_fee: string;
    avg_price: string;
    color: string;
    wallet_withdraw_fee: string;
    change_24h: string;
    change_24h_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1m: string;
    change_1m_amount: string;
    change_1y: string;
    change_1y_amount: string;
    logo: string;
    logo_dark: string;
    support_destination_tag: boolean;
    support_destination_tag_type: boolean;
    android_supported_version: string;
    ios_supported_version: string;
    circulating_supply: string;
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    ieo_phases: IeoPhas[];
    index_only: boolean;
    info: string;
    unavailable_reason: string;
    maintenance_reason: string;
    wallet_info: string;
    extra_info: string;
    investment_info: string;
    info_integration: string;
    description: string;
    info_deu: string;
    info_eng: string;
    info_fra: string;
    info_ita: string;
    info_pol: string;
    info_spa: string;
    info_tur: string;
    unavailable_reason_deu: string;
    unavailable_reason_eng: string;
    unavailable_reason_fra: string;
    unavailable_reason_ita: string;
    unavailable_reason_pol: string;
    unavailable_reason_spa: string;
    unavailable_reason_tur: string;
    maintenance_reason_deu: string;
    maintenance_reason_eng: string;
    maintenance_reason_fra: string;
    maintenance_reason_ita: string;
    maintenance_reason_pol: string;
    maintenance_reason_spa: string;
    maintenance_reason_tur: string;
    wallet_info_deu: string;
    wallet_info_eng: string;
    wallet_info_fra: string;
    wallet_info_ita: string;
    wallet_info_pol: string;
    wallet_info_spa: string;
    wallet_info_tur: string;
    extra_info_deu: string;
    extra_info_eng: string;
    extra_info_fra: string;
    extra_info_ita: string;
    extra_info_pol: string;
    extra_info_spa: string;
    extra_info_tur: string;
    investment_info_deu: string;
    investment_info_eng: string;
    investment_info_fra: string;
    investment_info_ita: string;
    investment_info_pol: string;
    investment_info_spa: string;
    investment_info_tur: string;
    info_integration_deu: string;
    info_integration_eng: string;
    info_integration_fra: string;
    info_integration_ita: string;
    info_integration_pol: string;
    info_integration_spa: string;
    info_integration_tur: string;
    description_deu: string;
    description_eng: string;
    description_fra: string;
    description_ita: string;
    description_pol: string;
    description_spa: string;
    description_tur: string;
    family: string;
}

export interface Cryptocoin {
    type: string;
    attributes: CryptocoinAttributes;
    id: string;
}

export interface IndexAssetAttributes {
    asset_id: string;
    allocation: string;
    allocation_percentage: string;
}

export interface IndexAsset {
    attributes: IndexAssetAttributes;
}

export interface IndexAttributes {
    symbol: string;
    name: string;
    sort: number;
    asset_type_name: string;
    asset_group_name: string;
    buy_active: boolean;
    sell_active: boolean;
    withdraw_active: boolean;
    deposit_active: boolean;
    transfer_active: boolean;
    available: boolean;
    maintenance_enabled: boolean;
    min_buy_eur: string;
    min_sell_eur: string;
    min_withdraw_eur: string;
    min_withdrawal: string;
    default_sell_amount: string;
    precision_for_fiat_price: number;
    precision_for_coins: number;
    precision_for_tx: number;
    precision_for_internal: number;
    avg_price: string;
    color: string;
    change_24h: string;
    change_24h_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1m: string;
    change_1m_amount: string;
    change_1y: string;
    change_1y_amount: string;
    logo: string;
    logo_dark: string;
    support_destination_tag: boolean;
    support_destination_tag_type: boolean;
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    index_assets: IndexAsset[];
    index_provider: string;
    index_original_fiat_symbol: string;
    index_only: boolean;
    info: string;
    unavailable_reason: string;
    maintenance_reason: string;
    wallet_info: string;
    extra_info: string;
    investment_info: string;
    info_integration: string;
    description: string;
    info_deu: string;
    info_eng: string;
    info_fra: string;
    info_ita: string;
    info_pol: string;
    info_spa: string;
    info_tur: string;
    unavailable_reason_deu: string;
    unavailable_reason_eng: string;
    unavailable_reason_fra: string;
    unavailable_reason_ita: string;
    unavailable_reason_pol: string;
    unavailable_reason_spa: string;
    unavailable_reason_tur: string;
    maintenance_reason_deu: string;
    maintenance_reason_eng: string;
    maintenance_reason_fra: string;
    maintenance_reason_ita: string;
    maintenance_reason_pol: string;
    maintenance_reason_spa: string;
    maintenance_reason_tur: string;
    wallet_info_deu: string;
    wallet_info_eng: string;
    wallet_info_fra: string;
    wallet_info_ita: string;
    wallet_info_pol: string;
    wallet_info_spa: string;
    wallet_info_tur: string;
    extra_info_deu: string;
    extra_info_eng: string;
    extra_info_fra: string;
    extra_info_ita: string;
    extra_info_pol: string;
    extra_info_spa: string;
    extra_info_tur: string;
    investment_info_deu: string;
    investment_info_eng: string;
    investment_info_fra: string;
    investment_info_ita: string;
    investment_info_pol: string;
    investment_info_spa: string;
    investment_info_tur: string;
    info_integration_deu: string;
    info_integration_eng: string;
    info_integration_fra: string;
    info_integration_ita: string;
    info_integration_pol: string;
    info_integration_spa: string;
    info_integration_tur: string;
    description_deu: string;
    description_eng: string;
    description_fra: string;
    description_ita: string;
    description_pol: string;
    description_spa: string;
    description_tur: string;
}

export interface Index {
    type: string;
    attributes: IndexAttributes;
    id: string;
}

export interface FiatAttributes {
    default_sell_amount: string;
    has_wallets: boolean;
    logo: string;
    logo_color: string;
    logo_dark: string;
    logo_white: string;
    name: string;
    numeric_character_reference: string;
    min_deposit_euro: string;
    min_withdraw_euro: string;
    precision: number;
    transfer_active: boolean;
    symbol: string;
    symbol_character: string;
    to_eur_rate: string;
    wallet_min_deposit: string;
    wallet_min_withdrawal: string;
    name_deu: string;
    name_eng: string;
    name_fra: string;
    name_ita: string;
    name_pol: string;
    name_spa: string;
    name_tur: string;
}

export interface Fiat {
    type: string;
    attributes: FiatAttributes;
    id: string;
}


