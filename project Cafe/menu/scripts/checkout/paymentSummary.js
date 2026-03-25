import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        totalQuantity += cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
        <div class="order-summary">
        <a href="/Order now/index.html">
            <button class="place-order-button">
                Place your order
            </button>
        </a>
            <p class="summary-terms">
                By placing order, you agree to Ranya Coffee's terms.
            </p>
            <hr>
            <h3 class="summary-title">Order Summary</h3>
            
            <div class="summary-row">
                <div>Items (${totalQuantity}):</div>
                <div>$${formatCurrency(productPriceCents)}</div>
            </div>

            <div class="summary-row">
                <div>Shipping & handling:</div>
                <div>$${formatCurrency(shippingPriceCents)}</div>
            </div>

            <div class="summary-row">
                <div>Total before tax:</div>
                <div>$${formatCurrency(totalBeforeTaxCents)}</div>
            </div>

            <div class="summary-row">
                <div>Estimated tax (10%):</div>
                <div>$${formatCurrency(taxCents)}</div>
            </div>

            <div class="total-row summary-row">
                <div>Order total:</div>
                <div>$${formatCurrency(totalCents)}</div>
            </div>
        </div>
    `;

    const paymentElement = document.querySelector('.js-payment-summary');
    if (paymentElement) {
        paymentElement.innerHTML = paymentSummaryHTML;
    }
}