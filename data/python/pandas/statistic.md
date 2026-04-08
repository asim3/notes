## install
```bash
pip install statsmodels
```

## bidirectional stepwise selection
```py
import pandas as pd
import statsmodels.api as sm

def stepwise_selection(X, y, initial_list=[], threshold_in=0.01, threshold_out=0.05, verbose=True):
    """
    Perform a bidirectional stepwise feature selection based on p-values.
    
    Parameters:
    - X (pd.DataFrame): DataFrame with candidate features.
    - y (pd.Series): Target variable.
    - initial_list (list): Features to start the model with (default is empty).
    - threshold_in (float): P-value threshold to include a feature.
    - threshold_out (float): P-value threshold to drop a feature.
    - verbose (bool): If True, prints the sequence of inclusions and exclusions.
    
    Returns:
    - list: The final list of selected features.
    """
    included = list(initial_list)
    
    while True:
        changed = False
        
        # 1. FORWARD STEP
        # Find features not currently in the model
        excluded = list(set(X.columns) - set(included))
        new_pval = pd.Series(index=excluded, dtype=float)
        
        for new_column in excluded:
            # Fit an OLS model with the currently included features + the new feature
            X_temp = sm.add_constant(pd.DataFrame(X[included + [new_column]]))
            model = sm.OLS(y, X_temp).fit()
            new_pval[new_column] = model.pvalues[new_column]
            
        best_pval = new_pval.min()
        if best_pval < threshold_in:
            best_feature = new_pval.idxmin()
            included.append(best_feature)
            changed = True
            if verbose:
                print(f'Add  {best_feature:30} with p-value {best_pval:.6f}')

        # 2. BACKWARD STEP
        # Fit model with all currently included features to check if any have lost significance
        if included:
            X_temp = sm.add_constant(pd.DataFrame(X[included]))
            model = sm.OLS(y, X_temp).fit()
            
            # Get p-values for features (excluding the constant/intercept)
            pvalues = model.pvalues.drop('const', errors='ignore')
            worst_pval = pvalues.max()
            
            if worst_pval > threshold_out:
                worst_feature = pvalues.idxmax()
                included.remove(worst_feature)
                changed = True
                if verbose:
                    print(f'Drop {worst_feature:30} with p-value {worst_pval:.6f}')
                    
        # If no features were added or dropped in this iteration, we have reached convergence
        if not changed:
            break
            
    return included

# ==========================================
# Applying the function to the tips dataset
# ==========================================

# 1. Load the data using pandas
url = "https://raw.githubusercontent.com/pandas-dev/pandas/main/pandas/tests/io/data/csv/tips.csv"
df = pd.read_csv(url)

# 2. Data Preparation
# The dataset has categorical variables (sex, smoker, day, time) which we need to encode.
# We use drop_first=True to avoid multicollinearity (the dummy variable trap).
df_encoded = pd.get_dummies(df, drop_first=True)

# Ensure everything is a float/int (Statsmodels requires numeric data)
df_encoded = df_encoded.astype(float)

# 3. Define target (y) and features (X)
# Let's predict 'tip' based on all other variables
y = df_encoded['tip']
X = df_encoded.drop('tip', axis=1)

# 4. Run Bidirectional Stepwise Selection
print("Starting Stepwise Selection...\n")
final_features = stepwise_selection(X, y, threshold_in=0.05, threshold_out=0.05)

print("\nFinal selected features:")
print(final_features)

# Optional: View the final model summary
print("\nFinal Model Summary:")
final_model = sm.OLS(y, sm.add_constant(X[final_features])).fit()
print(final_model.summary())
```



## return
```txt
Starting Stepwise Selection...

Add  total_bill                     with p-value 0.000000
Add  size                           with p-value 0.024872

Final selected features:
['total_bill', 'size']

Final Model Summary:
                            OLS Regression Results
==============================================================================
Dep. Variable:                    tip   R-squared:                       0.468
Model:                            OLS   Adj. R-squared:                  0.463
Method:                 Least Squares   F-statistic:                     105.9
Date:                Wed, 08 Apr 2026   Prob (F-statistic):           9.67e-34
Time:                        15:27:06   Log-Likelihood:                -347.99
No. Observations:                 244   AIC:                             702.0
Df Residuals:                     241   BIC:                             712.5
Df Model:                           2
Covariance Type:            nonrobust
==============================================================================
                 coef    std err          t      P>|t|      [0.025      0.975]
------------------------------------------------------------------------------
const          0.6689      0.194      3.455      0.001       0.288       1.050
total_bill     0.0927      0.009     10.172      0.000       0.075       0.111
size           0.1926      0.085      2.258      0.025       0.025       0.361
==============================================================================
Omnibus:                       24.753   Durbin-Watson:                   2.100
Prob(Omnibus):                  0.000   Jarque-Bera (JB):               46.169
Skew:                           0.545   Prob(JB):                     9.43e-11
Kurtosis:                       4.831   Cond. No.                         67.6
==============================================================================

Notes:
[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.
```
